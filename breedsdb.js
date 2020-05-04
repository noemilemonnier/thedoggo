#! /usr/bin/env node

console.log('This script populates some breeds to your database. Specified database as argument - e.g.: populatedb mongodb+srv://your_username:your_password@your_dabase_url');

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
if (!userArgs[0].startsWith('mongodb+srv://')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}

var async = require('async')
var Breeder = require('../gatsby-starter-forty/src/db/Models/breeders.js')
var Rescue = require('../gatsby-starter-forty/src/db/Models/rescues.js')
var Breed = require('../gatsby-starter-forty/src/db/Models/breeds.js')


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

function breederCreate(name, website, dogBreed, province, country, cb) {
  breederDetail = { name:name, website:website, dogBreed:dogBreed, province:province, country:country };
  var breeder = new Breeder(breederDetail);
       
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

function rescuesCreate(name, website, city, country, cb) {
  rescueDetail = { name: name, website : website, city:city, country:country };
   var rescue = new Rescue(rescueDetail);

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
          },
          function(callback) {
            breedCreate("Boxer", "Working Dogs", "big", "60-70 pounds", "10-12 years", "3", "4","3","3","5",  "https://www.petassure.com/petassure/file-streams/page/b4x0Jmxdp4YUDAZg00jv83tips-for-training-your-pet-boxer.jpg" , "https://dogtime.com/dog-breeds/boxer", callback);
          },
          function(callback) {
            breedCreate("Labrador Retriever", "Sporting Dogs", "big", "55-80 pounds", "10-12 years", "3", "5","4","4","5",  "https://thehappypuppysite.com/wp-content/uploads/2019/03/How-Long-Do-Labrador-Retriever-Live-long.jpg" , "https://dogtime.com/dog-breeds/labrador-retriever", callback);
          },
          function(callback) {
            breedCreate("German Shepher", "Herding Dogs", "big", "75-95 pounds", "10-14 years", "3", "4","4","4","5",  "https://doghint.com/wp-content/uploads/2017/05/german-shepherd-teething-cover.jpg" , "https://dogtime.com/dog-breeds/german-shepherd-dog", callback);
          },
          function(callback) {
            breedCreate("Golden Retriever", "Sporting Dogs", "big", "55-75 pounds", "10-12 years", "3", "4","4","4","4",  "https://www.biscuitsandbath.com/wp-content/uploads/2016/06/Golden-Retriever.jpg" , "https://dogtime.com/dog-breeds/golden-retriever", callback);
          },
          function(callback) {
            breedCreate("French Bulldog", "Companion Dogs", "medium", "16-28 pounds", "11-14 years", "3", "4","3","3","4",  "https://thehoundproject.com/wp-content/uploads/2019/03/A-Comprehensive-Resource-Page-For-French-Bulldog-Information-1200x900.jpg" , "https://dogtime.com/dog-breeds/french-bulldog", callback);
          },
          function(callback) {
            breedCreate("Beagle", "Hound Dogs", "medium", "18-30 pounds", "10-15 years", "3", "5","3","4","5",  "https://cdn2-www.dogtime.com/assets/uploads/gallery/beagle-dog-breed-pictures/9-sidelay.jpg" , "https://dogtime.com/dog-breeds/beagle", callback);
          },
          function(callback) {
            breedCreate("Poodle", "Companion Dogs", "big", "45-70 pounds", "12-15 years", "4", "5","2","4","5",  "https://vetstreet.brightspotcdn.com/dims4/default/b5fcb62/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F38%2Fec%2Ffd4eecbe4f57a282b707f097ef33%2Fpoodle-ap-1j99ae-645-x-380.jpg" , "https://dogtime.com/dog-breeds/poodle", callback);
          },
          function(callback) {
            breedCreate("Yorkshire Terrier", "Companion Dogs", "small", "4-6 pounds", "12-15 years", "3", "3","2","3","5",  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/small-dogs-yorkshire-terrier-1563779722.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=480:*" , "https://dogtime.com/dog-breeds/yorkshire-terrier", callback);
          },
          function(callback) {
            breedCreate("Dachshund", "Hound Dogs", "medium", "16-32 pounds", "12-15 years", "3", "3","3","4","3",  "https://www.rover.com/blog/wp-content/uploads/2020/01/top-dachshund-names-960x540.jpg" , "https://dogtime.com/dog-breeds/dachshund", callback);
          },
          function(callback) {
            breedCreate("Doberman Pinscher", "Working Dogs", "big", "60-80 pounds", "10-13 years", "3", "3","4","3","4",  "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12224830/Doberman-Pinscher-standing-outdoors.jpg" , "https://dogtime.com/dog-breeds/doberman-pinscher", callback);
          },
          function(callback) {
            breedCreate("Weimaraner", "Sporting Dogs", "big", "55-85 pounds", "11-13 years", "3", "4","4","4","5",  "https://www.elityavru.com/irk/resim/weimaraner-elityavru-2-2.jpg" , "https://dogtime.com/dog-breeds/weimaraner", callback);
          },
          function(callback) {
            breedCreate("Brittany", "Sporting Dogs", "medium", "30-40 pounds", "10-13 years", "3", "5","4","4","5",  "https://vetstreet.brightspotcdn.com/dims4/default/c6db571/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F9e%2F83%2F3d1981d9480e9ce42825ccf1d342%2Fbrittany-ap-jhhpyw-645-x-380.jpg" , "https://dogtime.com/dog-breeds/brittany", callback);
          },
          function(callback) {
            breedCreate("Great Dane", "Working Dogs", "big", "100-200 pounds", "7-10 years", "2", "5","4","3","5",  "https://www.thesprucepets.com/thmb/-RMPmq2JdLkILFCAhtj8XqurtsY=/1137x853/smart/filters:no_upscale()/great-dane-129741288-resized-56a26a905f9b58b7d0c9fe74.jpg" , "https://dogtime.com/dog-breeds/great-dane#/slide/1", callback);
          },
          function(callback) {
            breedCreate("Norwich Terrier", "Terrier Dogs", "small", "up to 12 pounds", "10-14 years", "4", "5","3","4","5",  "https://vetstreet.brightspotcdn.com/dims4/default/824b7e0/2147483647/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F78%2Ff04830a7e411e0a0d50050568d634f%2Ffile%2FNorwich-Terrier-1-645mk062711.jpg" , "https://dogtime.com/dog-breeds/norwich-terrier", callback);
          }
        ],
        // optional callback
        cb);
}


function createBreeders(cb) {
    async.parallel([
        function(callback) {
          breederCreate("BLUESTONE KENNELS", "https://bluestonekennel.weebly.com/","English Cocker Spaniel", "Nova Scotia", "Canada", callback);
          },
          function(callback) {
            breederCreate("Kaco Boxers & French Bulldogs", "https://kacoboxers.com","Boxer", "Ontario", "Canada", callback);
          }, 
          function(callback) {
            breederCreate("Khalsa Poodles", "https://www.khalsapoodles.com/","Poodle", "British Columbia", "Canada", callback);
          }
          ],
        // Optional callback
        cb);
}

function createRescues(cb) {
    async.parallel([
        function(callback) {
          rescuesCreate("SPCA of Montreal Quebec", "https://www.spca.com/", "Montreal", "Canada", callback);
        },
        function(callback) {
          rescuesCreate("Etobicoke Humane Society", "https://etobicokehumanesociety.com/", "Toronto", "Canada", callback);
        },
        function(callback) {
          rescuesCreate("BC SPCA Vancouver Branch", "https://spca.bc.ca/locations/vancouver/", "Vancouver", "Canada", callback);
        }
        ],
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
        console.log('Breeds: '+breeds);
        
    }
    // All done, disconnect from database
    mongoose.connection.close();
});
