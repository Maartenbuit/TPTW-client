import React from 'react';

import request from 'superagent'
import { connect } from 'react-redux'
import { url } from './constants'
import { setRooms } from './actions'
import RoomForm from './components/RoomForm'
import Homepage from './components/Homepage';
import { Route } from 'react-router-dom'

import RoomFormContainer from './components/RoomForm/RoomFormContainer'

export default class App extends React.Component {
  
  render() {
    return (

      <div className="App">
        <Homepage />
        {/* <Route exact path="/" component={} /> */}
        <Route path="/rooms/" component={RoomFormContainer} />
        <Route path="/rooms/:id" component={RoomFormContainer} />
      </div>
    )
  }
}


