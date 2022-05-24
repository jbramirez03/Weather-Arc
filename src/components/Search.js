import { useState, useContext, useEffect } from 'react';
import WeatherContext from '../utils/WeatherContext';
import axios from 'axios';
import moment from 'moment';

const Search = () => {
    const { citySearched, setToday } = useContext(WeatherContext);

    const [active, setActive] = useState(false);
    const [currentSearch, setCurrentSearch] = useState('');

    const handleToggle = () => {
        setActive(!active);
    }

    const handleClear = () => {
        setCurrentSearch('');
    }

    const searchHandler = async () => {
        const searchedCity = "https://api.openweathermap.org/data/2.5/weather?q=" + currentSearch + "&limit=1&appid=bcf6554b28b8c3bcc30e90eb27275f00"
        try {
            const returnedData = await axios.get(searchedCity);
            const searchedWeekly = "https://api.openweathermap.org/data/2.5/onecall?lat=" + returnedData.data.coord.lat + "&lon=" + returnedData.data.coord.lon + "&units=imperial&appid=bcf6554b28b8c3bcc30e90eb27275f00";
            const returnedWeeklyData = await axios.get(searchedWeekly);
            const todayData = returnedWeeklyData.data.current;
            setToday(
                returnedData.data.name,
                moment.unix(todayData.dt).format("MM/DD/YYYY"),
                todayData.temp,
                todayData.wind_speed,
                todayData.humidity,
                "https://openweathermap.org/img/wn/" + todayData.weather[0].icon + "@2x.png"
            );
            console.log(returnedData);
            console.log(returnedWeeklyData);
        } catch (error) {
            throw new error
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        searchHandler();
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