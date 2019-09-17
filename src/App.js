import React from 'react';
import { Route } from 'react-router-dom'


import RoomFormContainer from './components/RoomForm/RoomFormContainer'
import LoginFormContainer from './components/loginFormContainer/LoginFormContainer';

export default class App extends React.Component {
  
  render() {
    return (

      <div className="App">
        <Route exact path="/" component={LoginFormContainer} />
        <Route path="/rooms/" component={RoomFormContainer} />
        <Route path="/rooms/:id" component={RoomFormContainer} />
      </div>
    )
  }
}


