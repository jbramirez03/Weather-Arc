import React, { useContext } from 'react';

export const WeatherContext = React.createContext();

export const useWeather = () => useContext(WeatherContext);

export default function weatherProvider(props) {
    const citySearch = {
        name: 'new york'
    };

    return <WeatherContext.Provider value={{ citySearch }} {...props} />;
}