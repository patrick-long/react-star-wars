import './App.css';
import { useState, useEffect } from 'react';
import { GetStarships } from './Services/GetStarships';
import StarshipCard from './Components/StarshipCard/StarshipCard';

function App() {

  const [getStarship, setStarship] = useState({
    results: []
  });

  const getAppData = async () => {
    const data = await GetStarships();
    setStarship({
      results: data.results
    })
  }

  useEffect(() => {
    getAppData(); 
    console.log('useEffect was called');
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        STAR WARS STARSHIPS
      </header>
      <div className="card-container">
        {getStarship.results.map(result => 
          <div className="StarshipCards">
            <StarshipCard 
              name={result.name}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
