import { useState, useEffect } from 'react'

const Article = ({ identifier }) => {
    const [active, setActive] = useState(false);

    const handleSetActive = (article) => {
        const currentArticle = article;
        console.log(currentArticle);
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
        <article className={active ? 'weather-article active' : 'weather-article'} onClick={(e) => handleSetActive(e.target.parentElement)}>
            <h2>Date</h2>
            <p>Temp:</p>
            <p>Wind:</p>
            <p>Humidity:</p>
        </article>
    )
}

export default Article