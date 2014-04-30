var mongoose = require('mongoose');

var eventSchema = new mongoose.Schema({
  _id: { type: String, unique:true, lowercase: true },
  name: String,
  type: { type: String, lowercase: true },
  shortName: { type: String, unique: true, lowercase: true },
  state: Boolean,
  // TODO phone # per event.
  votingOptions: [{
    id: Number, // Number of vote option
    name: String, // Name of vote option to display
  }]
  // OR votingOptions: []
  // http://stackoverflow.com/questions/19695058/how-to-define-object-in-array-in-mongoose-schema-correctly-with-2d-geo-index
});

eventSchema.pre('save', function(next) {
  this._id = 'event:' + this.shortName;
  next();
});

var eventModel = mongoose.model('Event', eventSchema, 'events_votes_collection');

module.exports = eventModel;
