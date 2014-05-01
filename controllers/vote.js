var twiliosig = require('twiliosig');

var Event = require('../models/Event');
var Vote = require('../models/Vote');

var routes = {};
var methods = {};

/*********** Routes **********/
routes.createVote = function(req, res, next) {
  // If we have an error, explode.
  // Check sig should be off in development.
  if (process.env.NODE_ENV == 'production' && !twiliosig.valid(req, process.env.TWILIO_ACCOUNT_SID)) {
    return res.send(401, 'Invalid Signature');
  }

  // Create A Stub Vote.
  var vote = new Vote({
    voterPhoneNumber: req.body.From,
    eventPhoneNumber: req.body.To,
    voteBody: req.body.Body
  });

  // Save it and let the model middlware populate what we don't know.
  vote.save(function(err, savedVote) {
    console.log('Saving Done');
    console.log('VOTE');
    console.log(savedVote);
    if (err) {
      return res.send(503, err.message);
    }
    return res.send(savedVote);
  });

};


/*********** Methods **********/


exports.routes = routes;
exports.methods = methods;
