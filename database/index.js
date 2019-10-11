const mongoose = require('mongoose');
const seedDb = require('./seedDatabase.js')


mongoose.connect('mongodb://localhost/review', {useMongoClient: true});


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected')// we're connected!
});

let Review = mongoose.model('Reviews', seedDb.reiewSchema);

let getAll = (cb) => {
  Review.find({ListingID:0})
  .sort({Time: 'asc'})
  .exec(cb)
}


module.exports.getAll = getAll;