var twiliosig = require('twiliosig');

var Event = require('../models/Event');
var Vote = require('../models/Vote');

var routes = {};
var methods = {};

/*********** Routes **********/
routes.createVote = function(req, res, next) {
  // Validate twilio signature
  // Find the event this vote was cast for.
  // Save the vote.
  // If we have an error, explode.
  // Check sig should be off in development.
  if (process.env.TWILIO_CHECK_SIG == true && !twiliosig.valid(req, process.env.TWILIO_ACCOUNT_SID)) {
    res.send(401, 'Invalid Signature');
  }
  res.send('OK');
  // Look Up Event by Phone Number

};


/*********** Methods **********/


exports.routes = routes;
exports.methods = methods;
