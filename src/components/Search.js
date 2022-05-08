import { useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';

const Search = () => {
    const [active, setActive] = useState(false);

    const handleToggle = () => {
        setActive(!active);
    }

    return (
        <div className='search-area'>
            <div className='search'>
                <div className={active ? 'icon active' : 'icon'} onClick={handleToggle}></div>
                <div className="input"></div>
            </div>
        </div>
    )
}

export default Search