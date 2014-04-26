var Event = require('../models/Vote');

var routes = {};
var methods = {};

/*********** Routes **********/
routes.createVote = function(req, res, next) {
  // Validate twilio signature
  // Find the event this vote was cast for.
  // Save the vote.
  // If we have an error, explode.
};


/*********** Methods **********/


exports.routes = routes;
exports.methods = methods;
