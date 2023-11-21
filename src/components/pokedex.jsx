import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Pokemon} from './Pokemon'
import { doc, getDoc, onSnapshot, setDoc } from 'firebase/firestore';
import firestore from '../firebase/firebaseConfig';

export const Pokedex = () => {
    const [pokemones, setPokemones] = useState([])
    const refFirebase = doc(firestore, 'team/principal')
    const [team, setTeam] = useState([])
    const [page, setPage] = useState(1)

    const url = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${(page - 1) * 20}`
    function listenToADocument(){
        onSnapshot (refFirebase, docSnapshot => {
            if (docSnapshot.exists()) {
                const docData = docSnapshot.data()
                // console.log(In realtime, docData ${JSON.stringify(docData)}`)
                console.log(docData)
            }
        })
    }
    listenToADocument()

    useEffect(() => {
        axios.get(url).then((response) => {
            // setPokemones(response.data.results)
            const pokemonList = response.data.results
            const pokemonPromises = pokemonList.map((pokemon) => {
                return axios.get(pokemon.url)
            })
            Promise.all(pokemonPromises).then(pokemonResponses => {
                const pokemonData = pokemonResponses.map(res => {
                    const pokemon = res.data
                    return {
                        ...pokemon,
                        image: pokemon.sprites.front_default,
                        sprites: pokemon.sprites

                    }
                })
                setPokemones(pokemonData)
            })
        })
    },[setPokemones, page])

    useEffect(() => {
        const unsub = onSnapshot(doc(firestore, "team", "principal"), (snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.data();
                
                // Iterate over the keys of the data object
                Object.keys(data).forEach((key) => {
                    console.log(`${key}: ${data[key]}`); //enviar a useState
                });
            } else {
                console.log("Document does not exist");
            }
        });
    
        // Cleanup function
        return () => unsub();
    }, []);

  return (
    <>
        <div>
            {pokemones.map((pokemon, index) => {
                return <Pokemon key={index}
                pokemon = {pokemon}/>
            })}
            <div>
                <button onClick={() => setPage(page+1)}>Siguiente</button>
            </div>
                {
                    page != 1 && <button onClick={() => setPage(page-1)}>Anterior</button>
                }
        </div>
    </>
    
  )
}
