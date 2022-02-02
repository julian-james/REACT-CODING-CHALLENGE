import React, { useState } from 'react';


function Search(){

    
    return (
        <div id="search">
            Who do you want to search?
            <SearchForm />

            <h1>{}</h1>

            
            
        </div>
    );

}







function SearchForm({ getResult }) {

    const [ location, setLocation ] = useState("")

    const handleSubmit = e => {
        getResult(location);
    }

    const updateInput = e => {
        const input = e.target.value 
        setLocation(input)
    }


    return (
        <form role="form" onSubmit={handleSubmit}>
            <label for="location">Location</label>
            <input id="location" type="text" />
            <input type="submit" value="Search" />
        </form>
    );
};



export default Search;