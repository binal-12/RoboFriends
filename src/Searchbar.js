import React from "react";

const Searchbar = ({onSearch}) => {
    return(
        <input 
            type="search" 
            className="input-reset bg-lightest-blue b-light-green ba dib b--black-20 pa2 mb2 db w-20 br3" 
            placeholder="Search robots"
            onChange={onSearch}
        />
    )
}

export default Searchbar