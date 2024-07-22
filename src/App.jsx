import { useState, useEffect } from 'react'
import Header from './components/Header'
import Gameboard from './components/Gameboard'
import './App.css'

function App() {
  const [pokemons, setPokemons] = useState([]);

  // Get pokemon data
  useEffect(() => {
    const fetchPokemons = async () => {

      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon');
        const data = await response.json();

        // API call above returns just pokemon name and URL so here we use that URL to get individual pokemon data
        const pokemonDetails = await Promise.all(
          data.results.map((pokemon) =>
            fetch(pokemon.url).then((res) => res.json())
          )
        );

        setPokemons(pokemonDetails);
                
      } catch (error) {
        console.error('Error fetching the Pokemon data', error);
      }
      
    };

    fetchPokemons();
    
  }, []);

  return (
    <>
      <Header />
      <Gameboard pokemons={pokemons}/>
    </>
  );
}

export default App;
