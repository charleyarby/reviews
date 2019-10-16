import React from 'react'

const Rating = (props) => {
  var allRatings={
    Checkin:0,
    Communication:0,
    Location: 0,
    Cleanliness: 0,
    Accuracy:0,
    Value:0,
    Average:0
  }
  for(var review=0; review<props.allReviews.length; review++) {
    allRatings.Checkin += props.allReviews[review].Checkin
    allRatings.Communication += props.allReviews[review].Communication
    allRatings.Location += props.allReviews[review].Location
    allRatings.Cleanliness += props.allReviews[review].Cleanliness
    allRatings.Accuracy += props.allReviews[review].Accuracy
    allRatings.Value += props.allReviews[review].Value
  }

  allRatings.Checkin = allRatings.Checkin/props.allReviews.length
  allRatings.Communication = allRatings.Communication/props.allReviews.length
  allRatings.Location = allRatings.Location/props.allReviews.length
  allRatings.Cleanliness = allRatings.Cleanliness/props.allReviews.length
  allRatings.Accuracy = allRatings.Accuracy/props.allReviews.length
  allRatings.Value = allRatings.Value/props.allReviews.length
  allRatings.Average = allRatings.Checkin+allRatings.Communication+allRatings.Location+allRatings.Cleanliness+allRatings.Accuracy+allRatings.Value

  allRatings.Average = (allRatings.Average/6).toFixed(2)
  allRatings.Average = Number(allRatings.Average)

  console.log(allRatings)
  return(
  <div className="ratingSection">
    <div className='averageRating'>{allRatings.Average}</div>
    <span style={starStyle}>&#9733;</span>
    <div className='categoriesSection'>
      <div className='categoryRow'>
        <div className='categories'>
          <div>
           <hr style={fullBarLeft}></hr>
          </div>

          <div>Check-in</div>

        </div>
        <div className='categories'>
        <div>
           <hr style={fullBarRight}></hr>
          </div>
          <div>Cleanliness</div>

        </div>
      </div>
      <div className='categoryRow'>
        <div className='categories'>Communication</div>
        <div className='categories'>Accuracy</div>
      </div>
      <div className='categoryRow'>
        <div className='categories'>Location</div>
        <div className='categories'>Value</div>
      </div>
    </div>
  </div>

  )
    }

export default Rating;


const starStyle = {
  color:'rgb(19, 138, 138)'
}

const fullBarLeft = {
  position:'absolute',
  border: '3px solid rgb(19, 138, 138)',
  borderRadius: '2px',
  width:'20%',
  left:'20%'
}
const fullBarRight = {
  position:'absolute',
  border: '3px solid rgb(19, 138, 138)',
  borderRadius: '2px',
  width:'20%',
  left:'70%'
}