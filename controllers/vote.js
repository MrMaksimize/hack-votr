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

/*********** Methods **********/


exports.routes = routes;
exports.methods = methods;
