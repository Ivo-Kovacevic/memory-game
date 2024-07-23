import '../styles/card.css'

function Card( { pokemon, handleClick } ) {

    

    return (
        <div className='card' onClick = {() => handleClick(pokemon)}>
            <img src={pokemon.sprites.other.dream_world.front_default} />
            <h3>{pokemon.name}</h3>
        </div>
    );

}

export default Card;
