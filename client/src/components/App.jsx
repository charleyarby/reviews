import React from 'react'
import Axios from 'axios'
import OwnerReply from './reply.jsx'
//import '../../dist/styles.css'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      reviews: []
    }
  }
  componentDidMount(){
    Axios.get('/0')
    .then((data)=> {this.setState({
      reviews: data.data
    })})
  }
  render(){
    return(
      <div>
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
      </div>
    )
  }
}

export default App


