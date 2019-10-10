const mongoose = require('mongoose');
var faker = require('faker');
//import { loremIpsum } from "lorem-ipsum";
const LoremIpsum = require('lorem-ipsum').LoremIpsum;

mongoose.connect('mongodb://localhost/review', {useMongoClient: true});

let reviewSchema = mongoose.Schema({
	ListingID: Number,
	ReviewID: Number,
	Title: String,
  Username: String,
  ProfilePic: String,
  Time: String,
	Content: String,
	Accuracy: Number,
	Cleanliness: Number,
	Value: Number,
	Communication: Number,
	Checkin: Number,
	Location: Number

});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected')// we're connected!
});

let Review = mongoose.model('Reviews', reviewSchema);

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max:5,
    min:2
  },
  wordsPerSentence: {
    max: 10,
    min:4
  }
});
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
let firstName = faker.name.firstName()

let fakeData = () => {


//  console.log(lorem.generateParagraphs(1))
}
fakeData();

let save = (reviews, cb) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB

  // var numberofRepo=0;
  // reviews.forEach((repo)=> {
  //   numberofRepo++;
  for(var i=0; i<10; i++) {
    for(var j=0; j<=20; j++) {
      const filter = {ListingID: i,
                      ReviewID: j};
      const update = {Title: lorem.generateWords(1),
                      Content: lorem.generateParagraphs(1),
                      Username: faker.name.firstName(),
                      Accuracy: getRandomInt(4)+1,
                      Cleanliness: getRandomInt(4)+1,
                      Value: getRandomInt(4)+1,
                      Communication: getRandomInt(4)+1,
                      Checkin: getRandomInt(4)+1,
                      Location: getRandomInt(4)+1
                     };
       Review.findOneAndUpdate( filter, update, {new: true, upsert: true}, function(err, doc) {
         if(!err) {
        //console.log('added repo to db')
         }
         else if(err) {
           console.log(err)
         }
    })
    }
  }



  //   if(numberofRepo===repos.length) {
  //     cb('all repo saved')
  //   }
  // })
}

let getAll = (cb) => {
  Review.find({ListingID:0})
  .sort({ReviewID: 'asc'})
  .exec(cb)



}
save();

// getAll( (err, data)=> {
//   console.log(data)
// });

module.exports.save = save;
module.exports.getAll = getAll;