import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setRooms } from '../../actions'
import Game from './Game'
import GameOver from './GameOver'
import ChooseSideContainer from '../ChooseSide/ChooseSideContainer'
import request from 'superagent'
import axisQuestions from './AxisQuestions'
const { url } = require('../../constants')


class GameContainer extends Component {
  
  setRoomIdInUser = (roomId, userId) => {
    request
    .put(`${url}/user/${userId}`)
    .send({roomId})
    .then(response => console.log(response.body))
    .catch(console.error)
  }

  getPlayers = () => {
    const room = this.props.rooms.filter(room => {
      const roomId = Number(this.props.match.params.id)

      return room.id === roomId
    })
    const Users = room.map(room => {
      return room.users
    })

    if (Users[0].length === 2) {
      console.log('playerOne:', Users[0][1].name)
      this.setState({ playerOne: Users[0][1].name, playerTwo: Users[0][0].name, waiting: false})
    } else if (Users[0].length === 1) {
      this.setState({ waiting: true })
    }
  }

  componentDidMount() {
    
    this.setRoomIdInUser(Number(this.props.match.params.id), this.props.user.userId) 
  }

  checkUsers = (Users) => {
    if (!Users[0]) {
      return []
    } else {
      const users = Users[0].map(user => user)
      return users
    }
  }
  
  render() {
    

    const room = this.props.rooms.filter(room => {
      const roomId = Number(this.props.match.params.id)

      return room.id === roomId
    })

    const endGame = axisQuestions.length === room[0].round
    console.log('endGame:', endGame, 'q:', axisQuestions.length, 'round:', room[0].round) 
    
    const Users = room.map(room => {
      return room.users
    })

    const users = this.checkUsers(Users)
    
    return (
      <div>
        
        {!endGame && <Game rooms={this.props.rooms} 
        users={users} 
        room={this.props.match.params.id}/>}
        {users.length === 2 && !endGame && 
        <ChooseSideContainer users={users} 
        room={this.props.match.params.id}/>}
        {endGame && <GameOver users={users} /> }
      </div>
    )
  }
}

const mapDispatchToProps = {
  setRooms
}

const mapStateToProps = (state) => {
  return {
    rooms: state.rooms,
    user: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer)
