
import Article from './Article';
import CurrentDay from './CurrentDay';

const Grid = () => {
    const articles = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];


    return (
        <div className='weather-grid'>
            <CurrentDay />
            {articles.map(article => (
                <Article key={article} />
            ))}
        </div>
    )
}

export default Grid