import { useState } from 'react';

const Search = () => {
    return (
        <div className='search-area'>
            <form action="submit" className='search-form'>
                <input type="text" className='search' />
                <button action='submit' className='submit-btn'>S</button>
            </form>
        </div>
    )
}

export default Search