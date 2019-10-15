import React from 'react'

const OwnerReply = (props) => {
  console.log('hi')
  console.log(props)
  if(props.replies.Reply) {
    return (

    <div className="reviewReplies" >
      <div>
        <div className="replyImage">
          <img className= "Img" src={props.replies.OwnerPic} alt="face" height="50" width="50"></img>
        </div>
        <div className="replyInfo">
          <div className="OwnerName">{props.replies.OwnerName}</div>
          <div className="ownerReply">{props.replies.Reply}</div>
          <div className="replyTime">June 2016</div>
        </div>

        
        
        
      </div>
      
      </div>

    )
  } else {
    return (<div></div>)
  }
  // return(
  //   <div>{props.replies.Reply}</div>
  // )

}

export default OwnerReply;