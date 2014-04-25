var mongoose = require('mongoose');

var eventSchema = new mongoose.Schema({
  name: String,
  shortName: { type: String, unique: true, lowercase: true },
  votingIsOpen: Boolean,
  votingOptions: [{
    id: Number, // Number of vote option
    name: String, // Name of vote option to display
    votes: Number, // Number of votes cast for that option,
    phoneNumbers: [] // Array of Phone Number Strings.
  }]
  // OR votingOptions: []
  // http://stackoverflow.com/questions/19695058/how-to-define-object-in-array-in-mongoose-schema-correctly-with-2d-geo-index

});

module.exports = mongoose.model('Event', eventSchema);
