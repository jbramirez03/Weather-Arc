import React from 'react'

const Article = ({ identifier }) => {
    return (
        <article className={`weather-article ${identifier}`}>
            <h2>Date</h2>
            <p>Temp:</p>
            <p>Wind:</p>
            <p>Humidity:</p>
        </article>
    )
}

export default Article