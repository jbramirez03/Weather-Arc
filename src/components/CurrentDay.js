import { useState } from "react"

const CurrentDay = () => {
    return (
        <article className="currentDay">
            <h1>Today's weather: </h1>
            <h3>date</h3>
            <p>temp</p>
            <p>wind</p>
            <p>humidity</p>
        </article>
    )
}

export default CurrentDay