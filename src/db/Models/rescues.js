var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var RescueSchema = new Schema(
  {
    name: {type: String, required: true},
    website: {type: String, required: true},
    city: {type: String, required: true},
    country: {type: String, required: true}
  }
);

// Virtual for rescues's URL
RescueSchema
.virtual('url')
.get(function () {
  return '/Rescues/rescueSchema' + this._id;
});

//Export model
module.exports = mongoose.model('Rescue', RescueSchema);
