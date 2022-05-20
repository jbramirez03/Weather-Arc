import React, { useContext } from 'react';

export const WeatherContext = React.createContext();

export const useWeather = () => useContext(WeatherContext);

export default function weatherProvider(props) {
    const initialState = {
        city: {}
    };

    return <WeatherContext.Provider value={{ initialState }} {...props} />;
}