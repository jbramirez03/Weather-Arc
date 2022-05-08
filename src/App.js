import './App.css';
import Grid from './components/Grid';
import Search from './components/Search';
import Footer from './components/Footer';



function App() {
  return (
    <div className='container'>
      <main className='main'>
        <Search />
        <Grid />
        <Footer />
      </main>
    </div>

  );
}

export default App;
