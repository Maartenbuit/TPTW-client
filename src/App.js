import React from 'react';
import { Route } from 'react-router-dom'
import RoomFormContainer from './components/RoomForm/RoomFormContainer'
import LoginFormContainer from './components/loginFormContainer/LoginFormContainer'
import SignupFormContainer from './components/SignupFormContainer/SignupFormContainer'
import GameContainer from './components/Game/GameContainer';

export default class App extends React.Component {
  
  render() {
    return (

      <div className="App">
        <Route exact path="/" component={SignupFormContainer} />
        <Route path="/login" component={LoginFormContainer} />
        <Route path="/rooms/" component={RoomFormContainer} />
        <Route path="/room/:id" component={GameContainer} />
      </div>
    )
  }
}