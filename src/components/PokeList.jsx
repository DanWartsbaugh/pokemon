import React,{useState} from 'react';
import axios from 'axios';

const PokeList = () => {

const [allPokes,setAllPokes] = useState()

const getList = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
    .then(response=>{
        setAllPokes(response.data)
        console.log(response.data)
        // console.log(allPokes)
    })
    .then(
        console.log(allPokes)
    )

    .catch(err=>console.log(err))

}

    return (
        <div>
            <button onClick={getList}>Fetch em all</button><br></br>
            {allPokes?
            // 'some pokes':
            <ul>
                {allPokes.results.map((eachPoke,idx) =>
                <li key={idx} style={{listStyle:"none"}}>{eachPoke.name}</li>
                )}
            </ul>:
            'hit the button'}
        </div>
    )
}

export default PokeList