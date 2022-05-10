
import Article from './Article';
import CurrentDay from './CurrentDay';

const Grid = () => {
    const articles = [{ key: 0, day: 'monday' }, { key: 1, day: 'tuesday' }, { key: 2, day: 'wednesday' }, { key: 3, day: 'thursday' }, { key: 4, day: 'friday' }];


    return (
        <div className='weather-grid'>
            <CurrentDay />
            {articles.map(article => (
                <Article key={article.day} identifier={article.key} />
            ))}
        </div>
    )
}

export default Grid