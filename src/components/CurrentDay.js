import { useContext, useEffect } from "react"
import WeatherContext from "../utils/WeatherContext"

const CurrentDay = () => {
    const { citySearched } = useContext(WeatherContext);

    useEffect(() => {
        console.log(citySearched);
    }, [citySearched]);

    return (
        <article className="currentDay">
            <div className="currentImage">
                <div className="currentDay-img">
                    <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="weather icon" />
                </div>
            </div>
            <div className="currentDay-details">
                <h1>Weather for: </h1>
                <h3>Date</h3>
                <p>Temp:</p>
                <p>Wind:</p>
                <p>Humidity:</p>
            </div>
        </article>
    )
}

export default CurrentDay