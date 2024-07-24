import { useState, useEffect } from 'react'
import Scoreboard from './components/Scoreboard'
import Gameboard from './components/Gameboard'
import './App.css'

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);


  // Shuffle cardsd
  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5); 
  }


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

        // Add clicked key to each pokemon
        const pokemonsWithClickState = pokemonDetails.map(pokemon => ({
          ...pokemon,
          clicked: false
        }));

        setPokemons(shuffle(pokemonsWithClickState));

      } catch (error) {
        console.error('Error fetching the Pokemon data', error);
      }
      
    };

    fetchPokemons();
    
  }, []);


  // Runs when card is clicked
  function handleClick(clickedPokemon) {
    
    // Update pokemon value to clicked and increase score
    if (clickedPokemon.clicked === false) {
      const updatedPokemons = pokemons.map((pokemon) =>
        pokemon.id === clickedPokemon.id ? { ...pokemon, clicked: true } : pokemon
      );
      
      setPokemons(shuffle(updatedPokemons));
      setScore(prevScore => prevScore + 1);

    }
    
    // Reset all pokemon clicked values to false and set best score if its smaller than current score
    else {
      
      document.body.classList.add('flash-red');

      if (score > bestScore) {
        setBestScore(prevBestScore => prevBestScore = score);
      }
      setScore(0);
      
      const resetPokemons = pokemons.map((pokemon) => (
        { ...pokemon,
          clicked: false
        }
      ));

      setPokemons(shuffle(resetPokemons));

      setTimeout(() => {
        document.body.classList.remove('flash-red');
      }, 500);

    }
    
  }


  return (
    <>
      <Scoreboard score={score} bestScore={bestScore}/>
      <Gameboard pokemons={pokemons} handleClick={handleClick} score={score}/>
    </>
  );
}

export default App;
