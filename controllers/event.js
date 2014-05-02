var Event = require('../models/Event');
var Vote = require('../models/Vote');

var routes = {};
var methods = {};

/*********** Routes **********/

/**
 * GET /events
 * Events page.
 */
routes.index = function(req, res) {
  res.end('test');
};

routes.getEvent = function(req, res) {
  var event_short = req.params.eventshort;
  console.log(event_short);
  Event.findOne({ shortName: event_short }).lean().exec(function(err, eventObject){
    // Use Map Reduce here to get vote counts per option.
    var renderObject = {};
    eventObject.votingOptions = JSON.stringify(eventObject.votingOptions);
    renderObject.eventObject = eventObject;
    res.render('event', renderObject);
  });
}

/*********** Methods **********/


exports.routes = routes;
exports.methods = methods;
