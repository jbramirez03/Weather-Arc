// import { useState } from 'react';
import Article from './Article';
import CurrentDay from './CurrentDay';

const Grid = () => {
    const articles = [1, 2, 3, 4, 5];

    return (
        <div className='weather-grid'>
            <CurrentDay />
            {articles.map((article, i) => (
                <Article key={article} identifier={article} />
            ))}
        </div>
    )
}

export default Grid