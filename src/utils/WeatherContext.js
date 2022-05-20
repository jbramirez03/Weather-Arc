import React, { useContext } from 'react';

export const WeatherContext = React.createContext();

export const viewWeather = () => useContext(WeatherContext);

export default function weatherProvider(props) {
    const initialState = {};

    return <WeatherContext.Provider value={{ initialState }} {...props} />;
}