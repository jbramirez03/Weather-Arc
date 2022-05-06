import { useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';

const Search = () => {
    return (
        <div className='search-area'>
            <form action="submit" className='search-form'>
                <input type="text" className='search' />
                <button action='submit' className='submit-btn'><RiSearchLine /></button>
            </form>
        </div>
    )
}

export default Search