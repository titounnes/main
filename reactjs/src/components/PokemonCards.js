import React from 'react'

const PokemonCards = ({ image, name, type, _callback }) => {
    return (
        <div className="card">
            <img src={image} alt={name} width='200px' height='100px'/>
            <div className="detail">
                <h3>{name}</h3>
                <small>Type: {type}</small>
                <button className="card-button">Detail</button>
                <button className="card-button">Add to My Pokemon</button>
            </div>
        </div>
    )
}

export default PokemonCards
