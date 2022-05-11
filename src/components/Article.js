import { useState, useEffect } from 'react'

const Article = ({ identifier }) => {
    const [active, setActive] = useState(false);

    const handleSetActive = (article) => {
        const articles = document.querySelectorAll('.weather-article');
        const currentArticle = article;
        console.log(currentArticle);
        for (let index = 0; index < articles.length; index++) {
            const element = articles[index];
            if (element !== currentArticle)
                element.className = 'weather-article';
            else {
                element.className = 'weather-article active';
            }
        }

    }

    const handleNewClick = () => {
        const filtered = [];
        active ? setActive(false) : setActive(true);
        const articles = document.querySelectorAll('.weather-article');
        const currentArticle = articles[identifier];
        for (let i = 0; i < articles.length; i++) {
            if (articles[i] !== currentArticle) {

            }
        }

    }


    return (
        <article className='weather-article' onClick={(e) => e.target.parentElement.className === 'weather-grid' ? handleSetActive(e.target) : handleSetActive(e.target.parentElement)}>
            <h2>Date</h2>
            <p>Temp:</p>
            <p>Wind:</p>
            <p>Humidity:</p>
        </article>
    )
}

export default Article