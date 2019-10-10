const mongoose = require('mongoose');
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



let save = (reviews, cb) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB

  // var numberofRepo=0;
  // reviews.forEach((repo)=> {
  //   numberofRepo++;
    const filter = {ListingID: 123};
    const update = {Title: "Test Listing",
                    ReviewID: 1 ,
                    };
    Review.findOneAndUpdate( filter, update, {new: true, upsert: true}, function(err, doc) {
      if(!err) {
        console.log('added repo to db')
      }
    })
  //   if(numberofRepo===repos.length) {
  //     cb('all repo saved')
  //   }
  // })
}

let getAll = (cb) => {
  Review.find({})
  .limit(25)
  .sort({stars: 'descending'})
  .exec(cb);

}
save();

module.exports.save = save;
module.exports.getAll = getAll;