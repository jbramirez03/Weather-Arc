import { useContext } from "react"
import WeatherContext from "../utils/WeatherContext"

const CurrentDay = () => {
    const { citySearched } = useContext(WeatherContext);

    return (
        <article className="currentDay">
            <div className="currentImage">
                <div className="currentDay-img">
                    <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="weather icon" />
                </div>
            </div>
            <div className="currentDay-details">
                <h1>Weather for: {citySearched.name} </h1>
                <h3>Date</h3>
                <p>Temp:</p>
                <p>Wind:</p>
                <p>Humidity:</p>
            </div>
        </article>
    )
}

export default CurrentDay