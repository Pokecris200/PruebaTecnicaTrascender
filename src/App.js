import React from 'react'
import ViewContainer from './components/ViewContainer'
import './App.css'
import { Pokemon } from "./components/Pokemon";
import { useState, useEffect } from "react";

const pokemonCtrl = new Pokemon();

//Connection to DB
/*const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');*/

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/1/");
      const result = await response.json();
      console.log(response);
    })()
  }, [])
  

  return (
    <div className="App">
      <ViewContainer/>
    </div>
  )
}

export default App