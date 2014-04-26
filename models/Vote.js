var mongoose = require('mongoose');

var voteSchema = new mongoose.Schema({
  type: { type: String, lowercase: true },
  event_id: mongoose.Schema.Types.ObjectId,
  phoneNumber: String
});

var voteModel = mongoose.model('Vote', voteSchema, 'events_votes_collection');

module.exports = voteModel;
