#! /usr/bin/env node

console.log('This script populates some breeds to your database. Specified database as argument - e.g.: populatedb mongodb+srv://your_username:your_password@your_dabase_url');

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
if (!userArgs[0].startsWith('mongodb+srv://')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}

var async = require('async')
var Breeder = require('../Models/breeders.js')
var Rescue = require('../Models/rescues.js')
var Breed = require('../Models/breeds.js')


var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

var breeds = []
var breeders = []
var rescues = []

function breedCreate(name, dogGroup, size, weight, lifespan, adaptability, friendliness, health, trainability, physicalNeeds, image, moreDetails, cb) {
  breeddetail = {name:name , dogGroup: dogGroup, weight: weight,lifespan:lifespan, adaptability:adaptability, friendliness:friendliness, health:health, trainability: trainability , physicalNeeds:physicalNeeds, image:image, moreDetails:moreDetails};
  var breed = new Breed(breeddetail);
       
  breed.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Breed: ' + breed);
    breeds.push(breed)
    cb(null, breed)
  }  );
}

function breederCreate(name, website, dogBreed, country, cb) {
  var breeder = new Breeder({ name: name, website : website, dogBreed:dogBreed, country:country });
       
  breeder.save(function (err) {
    if (err) {
      cb(err, null);
      return;
    }
    console.log('New Breeder: ' + breeder);
    breeders.push(breeder)
    cb(null, breeder);
  }   );
}

function rescuesCreate(name, website, country, cb) {
   var rescue = new Rescue({ name: name, website : website, country:country });

  rescue.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Rescue: ' + rescue);
    rescues.push(rescue)
    cb(null, rescue)
  }  );
}


function createBreeds(cb) {
    async.parallel([
        function(callback) {
          breedCreate("English Cocker Spaniel", "Sporting Dogs", "medium", "26-34 pounds", "14 years", 4, 4, 3, 4, 3,  "https://i.pinimg.com/originals/e7/4d/31/e74d31611ffbd242ff8f682b677f3f29.jpg" , "https://dogtime.com/dog-breeds/english-cocker-spaniel", callback);
          breedCreate("Boxer", "Working Dogs", "big", "60-70 pounds", "10-12 years", "3", "4","3","3","5",  "https://www.petassure.com/petassure/file-streams/page/b4x0Jmxdp4YUDAZg00jv83tips-for-training-your-pet-boxer.jpg" , "https://dogtime.com/dog-breeds/boxer", callback);
          breedCreate("Labrador Retriever", "Sporting Dogs", "big", "55-80 pounds", "10-12 years", "3", "5","4","4","5",  "https://thehappypuppysite.com/wp-content/uploads/2019/03/How-Long-Do-Labrador-Retriever-Live-long.jpg" , "https://dogtime.com/dog-breeds/labrador-retriever", callback);
        }],
        // optional callback
        cb);
}


function createBreeders(cb) {
    async.parallel([
        function(callback) {
          breederCreate("Breeder Test", "www.google.com","Cocker Spanial", "Canada", callback)
        }],
        // Optional callback
        cb);
}

unction createRescues(cb) {
    async.parallel([
        function(callback) {
          rescuesCreate("Rescue Test", "www.google.com", "Canada", callback)
        }],
        // Optional callback
        cb);
}

async.series([
    createBreeds,
    createBreeders,
    createRescues
],
// Optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    else {
        console.log('BreedInstances: '+breeds);
        console.log('End';
        
    }
    // All done, disconnect from database
    mongoose.connection.close();
});
