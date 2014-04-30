var mongoose = require('mongoose');

var voteSchema = new mongoose.Schema({
  _id: { type: String, unique:true, lowercase: true },
  type: { type: String, lowercase: true },
  event_id: mongoose.Schema.Types.ObjectId,
  phoneNumber: String
});

// Put in some middleware for generating the id.
voteSchema.pre('save', function(next) {
  //"_id": "vote:event:demo:+15555551111",
  this._id = 'vote:' + this.event_id + ':' + this.phoneNumber;
  next();
});


var voteModel = mongoose.model('Vote', voteSchema, 'events_votes_collection');

module.exports = voteModel;
