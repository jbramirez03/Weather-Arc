import { useState } from 'react'

const Article = () => {
    const [active, setActive] = useState(false);

    // const handleActive = () => {
    //     if (active) {
    //         return;
    //     } else {
    //         setActive(false);
    //     }
    // }

    return (
        <article className={active ? 'weather-article active' : 'weather-article'} onClick={() => { active ? setActive(false) : setActive(true) }}>
            <h2>Date</h2>
            <p>Temp:</p>
            <p>Wind:</p>
            <p>Humidity:</p>
        </article>
    )
}

export default Article