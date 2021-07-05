import React from 'react'

const SearchBox = ({ onInputChange }) => {
    return (
        <div className="search-container">
            <input
                onChange={(event) => onInputChange(event.target.value)}
                placeholder="Type keywords here"
                className="search-input"
            />
        </div>
    )
}

export default SearchBox
