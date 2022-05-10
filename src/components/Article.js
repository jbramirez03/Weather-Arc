import { useState, useEffect } from 'react'

const Article = ({ identifier }) => {
    const [active, setActive] = useState(false);

    const handleNewClick = () => {
        const filtered = [];
        active ? setActive(false) : setActive(true);
        const articles = document.querySelectorAll('.weather-article');
        const currentArticle = articles[identifier];
        for (let i = 0; i < articles.length; i++) {
            if (articles[i] !== currentArticle) {
                filtered.push(articles[i]);
            }
        }

    }


    return (
        <article className={active ? 'weather-article active' : 'weather-article'} onClick={() => { handleNewClick() }}>
            <h2>Date</h2>
            <p>Temp:</p>
            <p>Wind:</p>
            <p>Humidity:</p>
        </article>
    )
}

export default Article