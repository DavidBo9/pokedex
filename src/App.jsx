import { useState } from 'react'
import pokeLogo from './assets/pikachu.png'
import './App.css'
import { Pokedex } from './components/pokedex'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://pokeapi.co/" target="_blank">
          <img src={pokeLogo} className="logo" alt="Poke logo" />
        </a>
      </div>
      <h1>Pokédex</h1>
      <Pokedex/>
      <div className="card">
      </div>
    </>
  )
}

export default App
