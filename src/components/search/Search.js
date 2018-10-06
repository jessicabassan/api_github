import React, { Component } from 'react';
import '../commum/css-reset.css'
import './search.css'

class Search extends Component {
    render() {
        return ( 
            <div className="search-container">
                <h1>Connect Github API</h1>

                <div className="input-area">
                    <form onSubmit={console.log('{this._handleSubmit}')}>
                        <input className="search-name-input" ref="userInput" value="Insert the username in Github" type="text" />
                        <button className="search-name-buttom">Search</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Search;