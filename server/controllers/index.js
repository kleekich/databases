var models = require('../models');
var utils = require('./utils'); 
var model = require('../models/index');


var objectIdCounter = 1;
module.exports = {
  messages: {
    get: function (req, res) {
      var messages = model.get();
      utils.sendResponse(res, {results: messages});
      
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      utils.collectData(req, function(message) {
        message.objectId = ++objectIdCounter;
        model.post(message);
        utils.sendResponse(res, {objectId: message.objectId}, 201);
      }); // a function which handles posting a message to the database
    }
  },
  users: {
    // Ditto as above
    get: function (req, res) {
      
    },
    post: function (req, res) {
      
    }
  }
};

