import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setRooms } from '../../actions'
import Game from './Game'
import request from 'superagent'
const { url } = require('../../constants')

class GameContainer extends Component {

  setRoomIdInUser = (roomId, userId) => {
    request
    .put(`${url}/user/${userId}`)
    .send({roomId})
    .then(response => console.log(response.body))
  }

  componentDidMount() {
  
    this.setRoomIdInUser(Number(this.props.match.params.id), this.props.user.userId)
    
  }
  
  render() {

    return (
      <div>
        <Game rooms={this.props.rooms} />
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
