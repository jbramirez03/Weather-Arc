import { useState } from "react"

const CurrentDay = () => {
    return (
        <article className="currentDay">
            <h1>Today's weather: </h1>
            <h3>Date</h3>
            <p>Temp:</p>
            <p>Wind:</p>
            <p>Humidity:</p>
        </article>
    )
}

export default CurrentDay