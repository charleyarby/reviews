const mongoose = require('mongoose');
const methods = require('./index.js');
mongoose.connect('mongodb://localhost/review', {useMongoClient: true});

let userSchema = mongoose.Schema({
  _id: String,
  imgSrc: String,
  reviews: [String]
})
let User = mongoose.model("Users", userSchema);

const fillUser = function() {

  methods.getAll( (err, data)=> {
    var allReviews = data
    var allUser=[]
    console.log(allReviews.length)
    for(var i=0; i<allReviews.length; i++) {
      if(!allUser.includes(allReviews.Username)) {
      allUser.push(allReviews[i].Username)
      }
    }
    //console.log(allUser)
    console.log(allUser.length)

  })

}

fillUser();