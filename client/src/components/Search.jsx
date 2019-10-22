import React from 'react'

const Search = (props) => {


  var filteredReviews=[]

    return(
      <form onSubmit={props.search}>
        <input value={props.value} type="text" placeholder="Search reviews" onChange={props.handleChange} />
      </form>
    )

}

export default Search;