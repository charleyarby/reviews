import React from 'react'
import Axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      reviews: []
    }
  }
  componentDidMount(){
    Axios.get('/ID')
    .then((data)=> {this.setState({
      reviews: data.data
    })})
  }
  render(){
    return(
      <div>
           {this.state.reviews.map((review)=>(
            <div>
              <div>Title: {review.Title} </div>
              <div>Username: {review.Username} </div>
              <img src={review.ProfilePic} alt="face" height="42" width="42"></img>
              <div>Date: {review.TimeFormated} </div>
              <div>Review ID: {review.ReviewID} </div>
              <div>Content: {review.Content} </div>

              <div>-----------------------------------------------------------------------------</div>
            </div>

          ))}
      </div>
    )
  }
}

export default App