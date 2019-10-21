import React from 'react'

const RenderButton = (props) => {
  return (
    <button onClick={()=>props.setPage(2)}>Next</button>
  )
}

export default RenderButton