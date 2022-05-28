// import { useState, useEffect } from 'react'

const Article = ({ date, temp, humidity, wind, img }) => {

    const handleSetActive = (currentArticle) => {
        const articles = document.querySelectorAll('.weather-article');

        if (currentArticle.parentElement.className === 'weather-article' || currentArticle.parentElement.className === 'weather-article active')
            return;

        if (currentArticle.className === 'weather-article') {
            currentArticle.className = 'weather-article active';

        } else {
            currentArticle.className = 'weather-article';
        }

        for (let index = 0; index < articles.length; index++) {
            const element = articles[index];
            if (element !== currentArticle)
                element.className = 'weather-article';
        }

    }

    return (
        <article className='weather-article' onClick={(e) => e.target.parentElement.className === 'weather-grid' ? handleSetActive(e.target) : handleSetActive(e.target.parentElement)}>
            <div className="img-block">
                <img src={img} alt="weather icon" />
            </div>
            <div className="weather-details">
                <h2>{date}</h2>
                <p>Temp: {temp}</p>
                <p>Wind: {wind}</p>
                <p>Humidity: {humidity}</p>
            </div>
        </article>
    )
}

export default Article