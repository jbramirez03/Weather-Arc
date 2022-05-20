import { useState, useReducer } from 'react';
import { useWeather } from '../utils/WeatherContext';
import reducer from '../utils/reducers';
import { UPDATE_CITY } from '../utils/actions';

const Search = () => {
    const initialState = useWeather();
    const [state, dispatch] = useReducer(reducer, initialState);
    const [active, setActive] = useState(false);
    const [currentSearch, setCurrentSearch] = useState('');

    const handleToggle = () => {
        setActive(!active);
    }

    const handleClear = () => {
        setCurrentSearch('');
    }

    return (
        <div className='search-area'>
            <div className={active ? 'search active' : 'search'}>
                <div className='icon' onClick={handleToggle}></div>
                <div className="input">
                    <input type="text" placeholder='Search' id='city-search' onChange={e => setCurrentSearch(e.target.value)} value={currentSearch} />
                </div>
                <span className="clear" onClick={handleClear}></span>
            </div>
        </div>
    )
}

export default Search