import React from 'react';
import '../style/searchbox.css';

const SearchBox = (props) => {

  return(
    <div>
        <input className = "input" onChange = {props.searchChange}  type = "search" placeholder ='search robots'></input>
    </div>
  
  );
}

export default SearchBox;