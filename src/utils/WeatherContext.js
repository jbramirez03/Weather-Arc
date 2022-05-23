import { createContext, useState } from 'react';

const WeatherContext = createContext();

export function WeatherProvider(children) {
    const [citySearched, setCitySearched] = useState({
        name: 'New York',
        date: '',
        temp: '',
        wind: '',
        humidity: ''
    });
    const handleSearch = (searchName, searchDate, searchTemp, searchWind, searchHumidity) => {
        setCitySearched({
            name: searchName,
            date: searchDate,
            temp: searchTemp,
            wind: searchWind,
            humidity: searchHumidity
        });
    }


    return <WeatherContext.Provider value={{ citySearched, handleSearch }} {...children} />;
}

export default WeatherContext;