import React from 'react'

const Reply = (props) => {

  //console.log(props)
  if(props.replies) {
    return (

    <div className="reviewReplies" >Replies: {props.replies}</div>

    )
  } else {
    return (<div></div>)
  }


}

export default Reply;