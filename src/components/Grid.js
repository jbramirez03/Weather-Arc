import { useState } from 'react';
import Article from './Article';

const Grid = () => {
    const [articles, setArticles] = useState([
        1, 2, 3, 4, 5
    ]);


    return (
        <div className='weather-grid'>
            {articles.map(article => (
                <Article key={article} />
            ))}
        </div>
    )
}

export default Grid