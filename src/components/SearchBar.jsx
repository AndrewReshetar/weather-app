import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ handleFormSubmit }) {
    const [inputValue, setInputValue] = useState('');

    const onFormSubmit = (e) => {
        e.preventDefault();
        handleFormSubmit(inputValue);
    }

    return (
        <div className="searchBar">
            <form className="ui form" onSubmit={onFormSubmit}>
                <div className="field">
                    <input type="text" value={inputValue} placeholder="Enter a city..." onChange={(e) => setInputValue(e.target.value)} />
                </div>
            </form>
        </div>
    )
}

export default SearchBar
