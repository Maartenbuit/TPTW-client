import React from 'react';
import { Route } from 'react-router-dom'
import { url } from './constants'
import { setRooms } from './actions'
import { connect } from 'react-redux'
import RoomFormContainer from './components/RoomForm/RoomFormContainer'
import LoginFormContainer from './components/loginFormContainer/LoginFormContainer'
import SignupFormContainer from './components/SignupFormContainer/SignupFormContainer'
import GameContainer from './components/Game/GameContainer';
import ChooseSideContainer from './components/ChooseSide/ChooseSideContainer'
import AlliesGameContainer from './components/AlliesGame/AlliesGameContainer'

class App extends React.Component {
  
  source = new EventSource(
    `${url}/stream`
    )
  

  render() {
    this.source.onmessage = (event) => {
      const { data } = event

      const rooms = JSON.parse(data)

      this.props.setRooms(rooms)
    }
    return (

      <div className="App">
        <Route exact path="/" component={SignupFormContainer} />
        <Route path="/login" component={LoginFormContainer} />
        <Route path="/rooms/" component={RoomFormContainer} />
        <Route path="/room/:id" component={GameContainer} />
        <Route path='/game/allies' component={AlliesGameContainer}/>
      </div>
    )
  }
}

const mapDispatchToProps = {
  setRooms
}

const mapStateToProps = (state) => {
  return { rooms: state.rooms, user: state.user }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)