import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Pokemon} from './Pokemon'
import { doc, getDoc, onSnapshot, setDoc } from 'firebase/firestore';
import firestore from '../firebase/firebaseConfig';

export const Pokedex = () => {
    const [pokemones, setPokemones] = useState([])
    const refFirebase = doc(firestore, 'team/principal')
    const url = "https://pokeapi.co/api/v2/pokemon/"

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
    },[setPokemones])

  return (
    <>
        <div>
            {pokemones.map((pokemon, index) => {
                return <Pokemon key={index}
                pokemon = {pokemon}/>
            })}
        </div>
    </>
    
  )
}
