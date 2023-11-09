import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Pokemon} from './Pokemon'

export const Pokedex = () => {
    const [pokemones, setPokemones] = useState([])

    const url = "https://pokeapi.co/api/v2/pokemon/"

    useEffect(() => {
        axios.get(url).then((response) => {
            setPokemones(response.data.results)
            console.log(pokemones)
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
