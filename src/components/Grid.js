import Article from './Article';
import CurrentDay from './CurrentDay';
import { useContext, useEffect } from 'react';
import WeatherContext from '../utils/WeatherContext';


const Grid = () => {
    const articles = [{ key: 0, day: 'monday', active: false }, { key: 1, day: 'tuesday', active: false }, { key: 2, day: 'wednesday', active: false }, { key: 3, day: 'thursday', active: false }, { key: 4, day: 'friday', active: false }];
    const { weeklySearched, setWeekly } = useContext(WeatherContext);

    useEffect(() => {
        if (weeklySearched === '') {
            console.log('none');
        } else {
            console.log(weeklySearched);
        }
    }, [weeklySearched]);

    return (
        <div className='weather-grid'>
            <CurrentDay />
            {weeklySearched ? weeklySearched.map(article => (
                <Article key={article.date} date={article.date} temp={article.temp} humidity={article.humidity} wind={article.wind} img={article.icon} />
            )) : ''}
        </div>
    )
}

export default Grid