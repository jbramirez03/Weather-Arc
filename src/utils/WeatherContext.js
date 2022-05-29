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

    const [weeklySearched, setWeeklySearched] = useState('');

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

    const setWeekly = (array) => {
        setWeeklySearched(array);
    }

    const searchHandler = async (currentSearch) => {
        const searchedCity = "https://api.openweathermap.org/data/2.5/weather?q=" + currentSearch + "&limit=1&appid=bcf6554b28b8c3bcc30e90eb27275f00"
        try {
            const returnedData = await axios.get(searchedCity);
            const searchedWeekly = "https://api.openweathermap.org/data/2.5/onecall?lat=" + returnedData.data.coord.lat + "&lon=" + returnedData.data.coord.lon + "&units=imperial&appid=bcf6554b28b8c3bcc30e90eb27275f00";
            const returnedWeeklyData = await axios.get(searchedWeekly);
            const todayData = returnedWeeklyData.data.current;
            const weeklyData = returnedWeeklyData.data.daily;
            setToday(
                returnedData.data.name,
                moment.unix(todayData.dt).format("MM/DD/YYYY"),
                todayData.temp,
                todayData.wind_speed,
                todayData.humidity,
                "https://openweathermap.org/img/wn/" + todayData.weather[0].icon + "@2x.png"
            );

            const dailyData = [];

            for (let index = 0; index < 5; index++) {
                const day = weeklyData[index + 1];
                const dayData = {
                    date: moment.unix(day.dt).format('MM/DD/YYYY'),
                    temp: day.temp.max,
                    wind: day.wind_speed,
                    humidity: day.humidity,
                    icon: "https://openweathermap.org/img/wn/" + day.weather[0].icon + "@2x.png"
                }
                dailyData.push(dayData);
            }

            setWeekly(dailyData);
        } catch (error) {
            console.log(error)
        }
    }


    return <WeatherContext.Provider value={{ citySearched, setToday, searchHandler, weeklySearched, setWeekly }} {...children} />;
}

export default WeatherContext;