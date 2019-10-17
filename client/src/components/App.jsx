import React from 'react'
import Axios from 'axios'
import OwnerReply from './reply.jsx'
import AllReviews from './allReviews.jsx'
import Rating from './Rating.jsx'
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
      <div className='Review'>
        <Rating allReviews={this.state.reviews}/>
        <AllReviews allReviews={this.state.reviews}/>
      </div>
    )
  }
}

export default App


