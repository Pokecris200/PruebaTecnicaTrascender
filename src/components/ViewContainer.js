import React from 'react'
import View from './View'
import {Vtest} from './View.js'

function test(variable) {
    
}

function ViewContainer() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="row">
            <div className="col-md-6">
                <View/>
            </div>
            <div className="col-md-6">
                <form onSubmit= {ev => {
                    ev.preventDefault();
                    test(ev.target.search.value);
                    }}>
                    <input type="text" name="search" autoComplete="off"></input>
                    <button type="submit">buscar</button>
                </form> 
            </div>
        </div>
    </div>
  )
}

export default ViewContainer