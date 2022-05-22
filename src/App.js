import './App.css';
import Grid from './components/Grid';
import Search from './components/Search';
import Footer from './components/Footer';
import { WeatherProvider } from './utils/WeatherContext';



function App() {
  return (
    <WeatherProvider>
      <div className='container'>
        <main className='main'>
          <Search />
          <Grid />
          <Footer />
        </main>
      </div>
    </WeatherProvider>
  );
}

export default App;
