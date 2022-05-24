import { createContext, useState } from 'react';

const WeatherContext = createContext();

export function WeatherProvider(children) {
    const [citySearched, setCitySearched] = useState({
        name: '',
        date: '',
        temp: '',
        wind: '',
        humidity: '',
        image: ''
    });
    const setToday = (searchName, searchDate, searchTemp, searchWind, searchHumidity, searchImage) => {
        setCitySearched({
            name: searchName,
            date: searchDate,
            temp: searchTemp,
            wind: searchWind,
            humidity: searchHumidity,
            image: searchImage
        });
    }


    return <WeatherContext.Provider value={{ citySearched, setToday }} {...children} />;
}

export default WeatherContext;