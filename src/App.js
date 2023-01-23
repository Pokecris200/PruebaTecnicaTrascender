import React from 'react'
import ViewContainer from './components/ViewContainer'
import './App.css'
import { useState, useEffect } from "react";

//Connection to DB
/*const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');*/

function App() {
  
  fetch("https://pokeapi.co/api/v2/pokemon/1/")
    .then(data => {return data.json()})
    .then(res => console.log(res))

  return (
    <div className="App">
      <ViewContainer/>
    </div>
  )
}

export default App