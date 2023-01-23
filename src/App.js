import React from 'react'
import ViewContainer from './components/ViewContainer'
import './App.css'
import { Pokemon } from "./components/Pokemon";
import { useState, useEffect } from "react";

const pokemonCtrl = new Pokemon();

//Connection to DB
/*const mongoose = require('mongoose');
const user = 'pokecris200';
const password = 'h5vRz2A1PXzGej33';
const uri = 'mongodb+srv://pokecris200:h5vRz2A1PXzGej33@cluster0.1bffmnu.mongodb.net/Pokemon?retryWrites=true&w=majority';
mongoose.connect('mongodb://127.0.0.1:27017/test');*/

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await pokemonCtrl.obtain();
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