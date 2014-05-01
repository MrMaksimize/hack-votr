var Event = require('../models/Event');

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
    console.log(eventObject);
    res.render('event', {
      title: eventObject.name,
      eventShort: eventObject.shortName
    });
  });
}

/*********** Methods **********/


exports.routes = routes;
exports.methods = methods;
