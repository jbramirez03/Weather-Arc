import { useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';

const Search = () => {
    return (
        <div className='search'>
            <form action="submit" className='search-form'>
                <input type="text" id='search' placeholder='Search here' />
                <button><RiSearchLine className='search-icon' /></button>
            </form>
        </div>
    )
}

export default Search