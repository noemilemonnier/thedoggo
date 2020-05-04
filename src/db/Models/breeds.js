var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BreedSchema = new Schema(
  {
    name: {type: String, required: true},
    dogGroup: {type: String, required: true},
    weight: {type: String, required: true},
    lifespan: {type: String, required: true},
    adaptability: {type: String, required: true},
    friendliness: {type: String, required: true},
    health: {type: String, required: true},
    trainability: {type: String, required: true},
    physicalNeeds: {type: String, required: true},
    image: {type: String, required: true},
    moreDetails: {type: String, required: true}
  });

// Virtual for breed's URL
BreedSchema
.virtual('url')
.get(function () {
  return '/Breeds/breedSchema' + this._id;
});


//Export model
module.exports = mongoose.model('Breed', BreedSchema);