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
  if (process.env.NODE_ENV == 'production' && !twiliosig.valid(req, process.env.TWILIO_ACCOUNT_SID)) {
    res.send(401, 'Invalid Signature');
  }
  // Look Up Event by Phone Number

  var vote = new Vote({
    voterPhoneNumber: req.body.From,
    eventPhoneNumber: req.body.To,
    voteBody: req.body.Body
  });
  console.log('Vote Created.  Saving.');

  vote.save(function(err, savedVote) {
    console.log('Saving Done');
    console.log('VOTE');
    console.log(savedVote);

    if (err) {
      res.send(err);
    }
    res.send(savedVote);
  });

};


/*********** Methods **********/


exports.routes = routes;
exports.methods = methods;
