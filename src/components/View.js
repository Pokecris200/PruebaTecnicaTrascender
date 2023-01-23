import React from 'react';
import {useState} from 'react';

function View() {
  const [pok, setPok] = useState("MissigNo") ;
  setPok("MissigNo");
  return (
    <div className = "card">
        <img src="https://img.pokemondb.net/sprites/home/normal/turtwig.png" alt="" />
        <div className = "card-body">
            <h4 className = "card-title">{pok}</h4>
            <p className = "card-text text-secondary">asdfghjklsdfghjkldfghjm</p>
        </div>
    </div>
  )
}

export default View