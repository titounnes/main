import React from 'react'

const PokemonDetails= ({ id, image, name, type }) => {
    return (
        <div className="content">
            <img src={image} alt={name} width='300px' height='200px'/>
            <div className="detail">
                <h2>ID: {id}</h2>
                <h2>{name}</h2>
                <small>Type: {type}</small>
                <h3>Height: {height}</h3>
                <h3>Weight: {weight}</h3>
            </div>
        </div>
    )
}

export default PokemonDetails
