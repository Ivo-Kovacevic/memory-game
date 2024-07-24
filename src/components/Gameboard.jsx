import Card from './Card'
import '../styles/gameboard.css'

function Gameboard( { pokemons, handleClick, score } ) {

    const selectedPokemons = pokemons.slice(0, score + 1);

    return (
        <div className='card-grid'>
            {selectedPokemons.map((pokemon) => (
                <Card key = {pokemon.id}
                    pokemon = {pokemon}
                    handleClick= {handleClick}
                />
            ))}
        </div>
    );

}

export default Gameboard;
