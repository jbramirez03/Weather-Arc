// import { useState } from "react"

const CurrentDay = () => {
    return (
        <article className="currentDay">
            <div className="currentDay-img">
                <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="weather icon" />
            </div>
            <div className="currentDay-details">
                <h1>Today's weather: </h1>
                <h3>Date</h3>
                <p>Temp:</p>
                <p>Wind:</p>
                <p>Humidity:</p>
            </div>
        </article>
    )
}

export default CurrentDay