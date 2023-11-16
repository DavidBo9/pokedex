import React from 'react';

export const Pokemon = ({pokemon}) => {
  return (
    <>
      <h3>{pokemon.name}</h3>
      <img src={pokemon.image} alt="" className="mx-auto"/>
    
    </>

  )}

// import React, {useState}  from 'react'
// import pokeLogo from './sparkling.png'
// import pokeLogo1 from './sparkling (1).png'


// export const Pokemon = ({ pokemon }) => {
//   const [shiny, setShiny] = useState(false)

//   const toggleOff = () => {
//     setShiny(true)
//   }

//   const toggleOn = () => {
//     setShiny(false)
//   }

//   const pokemonId = pokemon.url.split('/').filter(Boolean).pop(); // Extract the ID from the URL
//   return (
//     <div className="Pokemon">
//       {shiny === true ?
//         <>
//           <button onClick={toggleOn}>
//           <img src={pokeLogo1} className="logo" alt="Poke logo" /></button>
//           <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemonId}.png`} alt={pokemonId} />
//           <h3>{pokemon.name}</h3>
//         </>
//         :
//         <>
//           <button onClick={toggleOff}>
//           <img src={pokeLogo} className="logo" alt="Poke logo" /></button>
//           <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`} alt={pokemonId} />
//           <h3>{pokemon.name}</h3>
//         </>
//     }
//     </div>
//   );
// };
