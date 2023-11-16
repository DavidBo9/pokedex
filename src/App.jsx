import { useState } from 'react'
import pokeLogo from './assets/pikachu.png'
import './App.css'
import { Pokedex } from './components/pokedex'
import Navbar from './components/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-secondary">
        <Navbar/>
      </div>
      <div>
        <a href="https://pokeapi.co/" target="_blank">
          {/* <img src={pokeLogo} className="logo" alt="Poke logo" /> */}
        </a>
      </div>
      <h1 className="text-1xl font-bold underline">
      Pokedex
      </h1>
      <Pokedex/>
      <div className="card">
      </div>
      
    </>

  )
}

export default App
