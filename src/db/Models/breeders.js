var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BreederSchema = new Schema(
  {
    name: {type: String, required: true},
    website: {type: String, required: true},
    dogBreed: {type: String, required: true},
    province: {type: String, required: true},
    country: {type: String, required: true}
  }
);

// Virtual for breeder's URL
BreederSchema
.virtual('url')
.get(function () {
  return '/Breeders/breederSchema' + this._id;
});

//Export model
module.exports = mongoose.model('Breeder', BreederSchema);