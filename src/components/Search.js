import { useState, useContext, useEffect } from 'react';
import WeatherContext from '../utils/WeatherContext';

const Search = () => {
    const { cityName, handleSearch } = useContext(WeatherContext);

    useEffect(() => {
        console.log(cityName);
    }, [cityName])

    const [active, setActive] = useState(false);
    const [currentSearch, setCurrentSearch] = useState('');

    const handleToggle = () => {
        setActive(!active);
    }

    const handleClear = () => {
        setCurrentSearch('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch(currentSearch)
        setCurrentSearch('');
    }

    return (
        <div className='search-area'>
            <div className={active ? 'search active' : 'search'}>
                <div className='icon' onClick={handleToggle}></div>
                <form action="submit" onSubmit={handleSubmit}>
                    <div className="input">
                        <input type="text" placeholder='Search' id='city-search' onChange={e => setCurrentSearch(e.target.value)} value={currentSearch} />
                    </div>
                </form>
                <span className="clear" onClick={handleClear}></span>
            </div>
        </div>
    )
}

export default Search