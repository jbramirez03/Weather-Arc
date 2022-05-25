import Article from './Article';
import CurrentDay from './CurrentDay';
import { useContext } from 'react';
import WeatherContext from '../utils/WeatherContext';


const Grid = () => {
    const articles = [{ key: 0, day: 'monday', active: false }, { key: 1, day: 'tuesday', active: false }, { key: 2, day: 'wednesday', active: false }, { key: 3, day: 'thursday', active: false }, { key: 4, day: 'friday', active: false }];

    return (
        <div className='weather-grid'>
            <CurrentDay />
            {articles.map(article => (
                <Article key={article.day} />
            ))}
        </div>
    )
}

export default Grid