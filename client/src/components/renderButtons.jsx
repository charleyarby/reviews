import React from 'react'

const RenderButton = (props) => {
  var ButtonArray=[]
  var allButton=props.pages

  if(props.pages.length>3) {
    ButtonArray=allButton.slice(0,3)
    ButtonArray.push('...')
    ButtonArray.push('>')
  }
  if(props.pages.length>10) {
    if(props.currentPage>1) {
      var ButtonArray=[]
      ButtonArray.push('<')
      if(props.currentPage===2) {
        ButtonArray.push(1)
        ButtonArray.push(2)
        ButtonArray.push(3)
        ButtonArray.push('...')
      }
      if(props.currentPage===3) {
        for(var i=1; i<=4; i++) {
          ButtonArray.push(i)
        }
        ButtonArray.push('...')
      }
      if(props.currentPage===4) {
        for(var i=1; i<=5; i++) {
          ButtonArray.push(i)
        }
        ButtonArray.push('...')
      }
      if(props.currentPage>=5 && props.currentPage<=allButton.length-4) {
        console.log('in 5')
        ButtonArray.push(1)
        ButtonArray.push('...')
        ButtonArray.push(props.currentPage-1)
        ButtonArray.push(props.currentPage)
        ButtonArray.push(props.currentPage+1)
        ButtonArray.push('...')
        ButtonArray.push(allButton.length)
      }
      if(props.currentPage===allButton.length-3){
        console.log('in button length -3')
        ButtonArray.push(1)
        ButtonArray.push('...')
        for(var i=allButton.length-4; i<=allButton.length; i++) {
          ButtonArray.push(i)
        }
      }
      if(props.currentPage===allButton.length-2){
        ButtonArray.push(1)
        ButtonArray.push('...')
        for(var i=allButton.length-3; i<=allButton.length; i++) {
          ButtonArray.push(i)
        }
      }
      if(props.currentPage===allButton.length-1){
        ButtonArray.push(1)
        ButtonArray.push('...')
        for(var i=allButton.length-2; i<=allButton.length; i++) {
          ButtonArray.push(i)
        }
      }
      if(props.currentPage===allButton.length){
        ButtonArray.push(1)
        ButtonArray.push('...')
        for(var i=allButton.length-2; i<=allButton.length; i++) {
          ButtonArray.push(i)
        }
      }
      if(props.currentPage != allButton.length){
      ButtonArray.push('>')
      }
    }
  }

  return (
    <div>
      {ButtonArray.length > 1 &&
      ButtonArray.map((page)=> {
        if(typeof page === 'number') {
        return(<button onClick={()=>props.setPage(page)}>{page}</button>)
        } else if(page==='...') {
          return(<button >{page}</button>)
        } else if(page=== '<') {
          return(<button onClick={()=>props.setPage(1)}>{page}</button>)
        } else if(page=== '>') {
          return(<button onClick={()=>props.setPage(allButton.length)}>{page}</button>)
        }

      })}
    </div>
  )
}
export default RenderButton