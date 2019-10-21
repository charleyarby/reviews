import React from 'react'

const RenderButton = (props) => {
  var ButtonArray=[]
  var allButton=props.pages

  if(props.pages.length>3) {
    ButtonArray=allButton.slice(0,3)
    ButtonArray.push('>')
  }

  return (
    <div>
      {ButtonArray.length > 1 &&
      ButtonArray.map((page)=> (
        <button onClick={()=>props.setPage(page)}>{page}</button>
      ))}
    </div>
  )
}

export default RenderButton