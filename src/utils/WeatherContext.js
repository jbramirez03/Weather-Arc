import { useContext, createContext, useState } from 'react';

const WeatherContext = createContext();

export function WeatherProvider(children) {
    const [cityName, setCityName] = useState('new york');

    const handleSearch = (searchedName) => {
        setCityName(searchedName)
    }

    return <WeatherContext.Provider value={{ cityName, handleSearch }} {...children} />;
}

export default WeatherContext;