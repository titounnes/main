import React, { useEffect, useState } from "react";
import './App.css';
import './index.css';
import Navbar from './Navbar';
import PokemonCards from "./components/PokemonCards";

function App() {

  const [allPokemons, setAllPokemons] = useState([])
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=15')

  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    setLoadMore(data.next)

    function createPokemonObject(results)  {
      results.forEach( async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data =  await res.json()
        setAllPokemons( currentList => [...currentList, data])
      })
    }
    createPokemonObject(data.results)
  }

  useEffect(() => {
    getAllPokemons()
  },[]
  )

return (
  <div className = "App">
    <div className = "App-container">
      <Navbar/>
      <div className="pokemon-container">
        <div className="all-container">
          {allPokemons.map( (pokemon, index) => 
            <PokemonCards
              key={index}
              image={pokemon.sprites.other.dream_world.front_default}
              name={pokemon.name}
              type={pokemon.types[0].type.name}
            />)}
        </div>
        <button className="load-more" onClick={() => getAllPokemons()}>Load More</button>
      </div>
    </div>
  </div>
);
}

export default App;