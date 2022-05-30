import { useContext, useEffect } from "react"
import WeatherContext from "../utils/WeatherContext"

const CurrentDay = () => {
    const { citySearched, searchHandler } = useContext(WeatherContext);

    useEffect(() => {
        if (citySearched.name === '')
            searchHandler('New York');
    }, [citySearched, searchHandler]);


    if (citySearched.name === '') {
        return (
            <article className="currentDay-skeleton">
                <div className="currentImage-skeleton">
                </div>
                <div className="details-skeleton">
                    <h1></h1>
                    <h3></h3>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
            </article>
        )
    }

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