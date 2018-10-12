/* You'll need to have MySQL running and your Node server running
 * for these tests to pass. */

var mysql = require('mysql');
var request = require('request'); // You might need to npm install the request module!
var expect = require('chai').expect;

describe('Persistent Node Chat Server', function() {
  var dbConnection;

  beforeEach(function(done) {
    dbConnection = mysql.createConnection({
      user: 'student',
      password: 'student',
      database: 'chat'
    });
    dbConnection.connect();

    var tablename = "messages"; // TODO: fill this out -- DONE

    /* Empty the db table before each test so that multiple tests
     * (or repeated runs of the tests) won't screw each other up: */
    dbConnection.query('truncate ' + tablename, done);
  });

  afterEach(function() {
    dbConnection.end();
  });

  it('Should insert posted messages to the DB', function(done) {
    // Post the user to the chat server.
    request({
      method: 'POST',
      uri: 'http://127.0.0.1:3000/classes/users',
      json: { username: 'Valjean' }
    }, function (err, response, body) {
      //Post a message to the node chat server:
      
      request({
        method: 'POST',
        uri: 'http://127.0.0.1:3000/classes/messages',
        json: {
          id: '1',
          username: 'Valjean',
          message: 'In mercy\'s name, three days is all I need.',
          roomname: 'Hello',
          created_at: '1'
        }
      }, function (err, response, body) {
        if(err){
          console.log("WE FOUND A ERRORRRRRRR=========================");
          console.log(err);
        }
        console.log('---------------------------------------------');
        console.log(response.request.Request);
        console.log('---------------------------------------------');
        
        
        // Now if we look in the database, we should find the
        // posted message there.

        // TODO: You might have to change this test to get all the data from
        // your message table, since this is schema-dependent.
        
        
        
        
         dbConnection.query('SELECT * FROM messages', (err, results)=>{
          if( err ){
            console.log("Message INSERT FAILED");
          } else {
            console.log("===============");
            console.log(results);
            console.log("===============");
          }
          
        })
        
        
        var queryString = 'SELECT * FROM messages';
        var queryArgs = [];

        dbConnection.query(queryString, function(err, results) {
          
          if(err){
            console.log("===============");
            console.log("ERRROR");
            console.log("===============");
          }
          // console.log("===============");
          //   console.log(results);
          //   console.log("===============");
          // Should have one result:
          expect(results.length).to.equal(1);

          // TODO: If you don't have a column named text, change this test.
          expect(results[0].message).to.equal('In mercy\'s name, three days is all I need.');

          done();
        });
      });
    });
  });

  it('Should output all messages from the DB', function(done) {
    // Let's insert a message into the db
       var queryString = "INSERT INTO messages (id, message, room, userID, created_at) VALUES(2, 'hihihi', 'lobby', 5, 10 )";
       var queryArgs = [];
    // TODO - The exact query string and query args to use
    // here depend on the schema you design, so I'll leave
    // them up to you. */

    dbConnection.query(queryString, queryArgs, function(err) {
      if (err) { throw err; }

      // Now query the Node chat server and see if it returns
      // the message we just inserted:
      request('http://127.0.0.1:3000/classes/messages', function(error, response, body) {
        var messageLog = JSON.parse(body);
        expect(messageLog[0].text).to.equal('Men like you can never change!');
        expect(messageLog[0].roomname).to.equal('main');
        done();
      });
    });
  });
});
