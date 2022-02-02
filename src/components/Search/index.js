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







function SearchForm() {

    return (
        <form role="form" /*onSubmit={}*/>
            <label for="username">Location</label>
            <input id="username" type="text" />
            <input type="submit" value="Search" />
        </form>
    );
};



export default Search;