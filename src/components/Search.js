import { useState } from 'react';

const Search = () => {
    return (
        <div className='search-area'>
            <form action="submit" className='search-form'>
                <input type="text" className='search' />
            </form>
        </div>
    )
}

export default Search