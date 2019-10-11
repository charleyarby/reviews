const mongoose = require('mongoose');

var faker = require('faker');
const LoremIpsum = require('lorem-ipsum').LoremIpsum;
var moment = require('moment');
var DateGenerator = require('random-date-generator');




mongoose.connect('mongodb://localhost/review', {useMongoClient: true});

var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
  console.log('connected')// we're connected!
});

let reviewSchema = mongoose.Schema({
	ListingID: Number,
	ReviewID: Number,
	Title: String,
  Username: String,
  ProfilePic: String,
  ProfilePic: String,
  Time: String,
  TimeFormated:String,
	Content: String,
	Accuracy: Number,
	Cleanliness: Number,
	Value: Number,
	Communication: Number,
	Checkin: Number,
	Location: Number
});





// User.create({
//     _id: 'bob',
//     imgSrc: faker.image.avatar()
// }, (err, data) => {
//   if(err) console.log(err)
//   if(data) console.log(data)
// })

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

let save = (reviews, cb) => {

  for(var i=0; i<10; i++) {
    var numReviews = Math.floor(Math.random() * Math.floor(100));
    for(var j=0; j<=numReviews; j++) {
      var newDate = generateRandomDate();
     // var time = JSON.stringify(moment().format('LL'))
      const filter = {ListingID: i,
                      ReviewID: j};
      const update = {Title: lorem.generateWords(1),
                      Content: lorem.generateParagraphs(1),
                      Username: faker.name.firstName(),
                      ProfilePic: faker.image.avatar(),
                      Time:newDate,
                      TimeFormated: moment(newDate).format("MMMM YYYY"),
                      Accuracy: getRandomInt(4)+1,
                      Cleanliness: getRandomInt(4)+1,
                      Value: getRandomInt(4)+1,
                      Communication: getRandomInt(4)+1,
                      Checkin: getRandomInt(4)+1,
                      Location: getRandomInt(4)+1
                     };
      Review.findOneAndUpdate( filter, update, {new: true, upsert: true}, function(err, doc) {
        if(!err) {
       // console.log('added repo to db')
        }
        else if(err) {
          console.log(err)
        }
    })
    }
  }
}



const generateRandomDate = function() {
let startDate = new Date(2014, 1, 1);
let endDate = new Date(2017, 12, 31);
var randomDate = JSON.stringify(DateGenerator.getRandomDateInRange(startDate, endDate))
randomDate = randomDate.slice(0,11) + '"'
var formatDate = moment(randomDate, "YYYYMMDD")
var DateNumbers = moment(formatDate).format("YYYYMMDD")
//console.log(DateNumbers)
return DateNumbers
}

save();

//console.log(faker.image.avatar())


module.exports.save = save;
module.exports.reviewSchema = reviewSchema;
