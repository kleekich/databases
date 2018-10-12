var db = require('../db');
// var connection = require('../db/index');
var controller = require('../controllers/index.js')

module.exports = {
  messages: {
    get: function (callback) {
      db.connection.query('SELECT * FROM messages', (err, rows, fields) => {
        if( err ){
          callback(err, null);
        } else {
          callback(null, rows);
        }
      })
      
    }, // a function which produces all the messages
    
    
    post: function (messageObject, callback) {
      //query to get users
      
      
      
      db.connection.query('INSERT INTO messages (id, messageText, roomname, userID, created_at) VALUES (?,?,?,?,?)',
     [ messageObject.id, messageObject.message, messageObject.rooname, 1, messageObject.created_at ], (err, rows, fields) => {
        if(err) {
          throw err; 
        } else {
          callback(null, rows); 
        }
      })
      // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var queryStr = 'select * from users'; 
      db.connection.query(queryStr, (err, results) => {
        callback(err, results; 
      })
    },
    post: function (user, callback) {
    
      db.connection.query('INSERT INTO users (username) VALUES (?)', [user.username], (err, rows, fields) => {
        if(err) {
          throw err; 
        } else {
          callback(null, rows);
        }
      })
    }
  }
};

















