import { useContext, useEffect } from "react"
import WeatherContext from "../utils/WeatherContext"

const CurrentDay = () => {
    const { citySearched, searchHandler } = useContext(WeatherContext);

    useEffect(() => {
        if (citySearched.name === '')
            searchHandler('New York');
        console.log(citySearched);
    }, [citySearched]);


    return (
        <article className="currentDay">
            <div className="currentImage">
                <div className="currentDay-img">
                    <img src={citySearched.image} alt="weather icon" />
                </div>
            </div>
            <div className="currentDay-details">
                <h1>{citySearched.name}</h1>
                <h3>{citySearched.date}</h3>
                <p>Temp: {citySearched.temp}</p>
                <p>Wind: {citySearched.wind}</p>
                <p>Humidity: {citySearched.humidity}</p>
            </div>
        </article>
    )
}

export default CurrentDay