var models = require('../models');

  module.exports = {
    messages: {
      get: function (req, res) {
        models.messages.get((err, messages) => {
          if(err) {
            throw err; 
          } else {
            res.json(messages)
          } 
        })

        //This logs to the page ^ 
      }, // a function which handles a get request for all messages
      
      
      post: function (req, res) {
        
        models.messages.post(req.body, (err, message) => {
          if(err) {
            throw err; 
          } else {
            // callback(message); 
            res.sendStatus(201)
          }
        })
      }
   // a function which handles posting a message to the database
    },
  
    
    
    users: {
      // Ditto as above
      get: function (req, res) {
        models.users.get((err, users) => {
          if( err ) {
            throw err; 
          } else {
            res.json(users); 
          }
        });
      },
      
      post: function (req, res) {
        models.users.post(req.body, (err, users) => {
          if( err ) {
            throw err; 
          } else {
            res.sendStauts(201);
          }
        });
      }
    }
  }
    
    
    //This page connects to the server and is 
    //passing things to the Models page that is 
    //connected to the database 