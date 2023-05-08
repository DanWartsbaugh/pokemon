import React, {useState} from 'react';
import axios from 'axios';

const FetchOne = () => {

    const [pokemon,setPokemon] = useState(null)

    const fetchIt = ()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon/eevee')
        .then(response=>{
            setPokemon(response.data)
        })
        .catch(err=>console.log(err))
    }

  return (
    <div>
        <button onClick={fetchIt}>Fetch a poke</button>
        {pokemon?
        <h1>{pokemon.name}</h1>:
        <h1>"Hit the button!"</h1>}
    </div>
  )
}

export default FetchOne