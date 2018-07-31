import React from 'react'

const Search = (props)=>(
    <div>
        <input type="text" className="search input-lg" placeholder="Username" onChange={props.onChange}/>
    </div>
);

export default Search