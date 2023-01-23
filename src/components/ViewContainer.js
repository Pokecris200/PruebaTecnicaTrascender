import React from 'react'
import View from './View'

function ViewContainer() {
  return (
    <div className="container d-flex justify-content-center">
        <div className="row">
            <div className="col-md-4">
                <View/>
                <View/>
                <View/>
            </div>
        </div>
    </div>
  )
}

export default ViewContainer