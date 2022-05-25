import { createContext, useState } from 'react';
import axios from 'axios';
import moment from 'moment';

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

    const searchHandler = async (currentSearch) => {
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
            console.log(error)
        }
    }


    return <WeatherContext.Provider value={{ citySearched, setToday, searchHandler }} {...children} />;
}

export default WeatherContext;