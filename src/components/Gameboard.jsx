import Card from './Card'
import '../styles/gameboard.css'

function Gameboard( { pokemons, handleClick } ) {

    return (
        <div className='card-grid'>
            {pokemons.map((pokemon) => (
                <Card key = {pokemon.id}
                    pokemon = {pokemon}
                    handleClick= {handleClick}
                />
            ))}
        </div>
    );

}

export default Gameboard;
