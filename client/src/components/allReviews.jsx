import React from 'react'

const allReview = (props) => {
  {this.state.reviews.map((review)=>{
    // console.log(review.Reply)
     return(
    <div className='review'>
      <div>
        <div className="userDate">
          <div className='reviewUsername'> {review.Username} </div>
          <div className='reviewTime'> {review.TimeFormated} </div>
        </div>
        <div className= "reviewImg">
          <img className= "Img" src={review.ProfilePic} alt="face" height="50" width="50"></img>
        </div>
      </div>
      <div className='reviewContent'>{review.Content} </div>
      <OwnerReply replies={review}/>
    </div>
     )
   })}
}

export default allReview;