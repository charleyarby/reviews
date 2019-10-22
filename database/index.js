const mongoose = require('mongoose');
const seedDb = require('./seedDatabase.js')


mongoose.connect('mongodb://localhost/review', {useMongoClient: true});


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected')// we're connected!
});

let Review = mongoose.model('Reviews', seedDb.reiewSchema);

let getAll = (room, cb) => {
  Review.find({ListingID:room})
  .sort({Time: 'desc'})

  .exec(cb)
}


module.exports.getAll = getAll;