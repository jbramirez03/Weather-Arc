// import { useState, useEffect } from 'react'

const Article = () => {

    const handleSetActive = (article) => {
        const articles = document.querySelectorAll('.weather-article');
        const currentArticle = article;
        console.log(article.parentElement);

        if (article.parentElement.className === 'weather-article' || article.parentElement.className === 'weather-article active')
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
            {/* <h2>Date</h2>
            <p>Temp:</p>
            <p>Wind:</p>
            <p>Humidity:</p> */}
            <div className="img-block">
                <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="weather icon" />
            </div>
        </article>
    )
}

export default Article