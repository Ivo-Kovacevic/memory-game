import '../styles/card.css'

function Card( { pokemon, handleClick } ) {

    function capitalizeFirstLetter(pokemon) {
        return pokemon.charAt(0).toUpperCase() + pokemon.slice(1);
    }

    return (
        <div className='card' onClick = {() => handleClick(pokemon)}>
            <img src={pokemon.sprites.other.dream_world.front_default} />
            <h3>{capitalizeFirstLetter(pokemon.name)}</h3>
        </div>
    );

}

export default Card;
