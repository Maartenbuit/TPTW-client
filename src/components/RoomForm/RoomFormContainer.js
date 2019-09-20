import React, { Component } from 'react'
import request from 'superagent'
import { connect } from 'react-redux'

import { url } from '../../constants'
//import { setOpenRooms } from '../../actions'

import RoomForm from './RoomForm'

class RoomFormContainer extends Component {
  state ={ 
    name: '',
    }

  onChange = (event) => {
    const { target: { value } } = event

    this.setState({ name: value })
    
  }

  onSubmit = (event) => {
    event.preventDefault()
    
    const { name } = this.state

    request
      .post(`${url}/room`)
      .set('Authorization', `Bearer ${this.props.user.jwt}`)
      .send( { name })
      .then(response => {
        this.setState({ name: ''})
      })
      .catch(console.error)

      
  }


  render() {
    const openRoomsArray = this.props.rooms.filter(room => {
      return room.users.length < 2
    })
    
    return (
      <div>
        <RoomForm
        name={this.state.name}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        rooms={this.props.rooms}
        openRooms={openRoomsArray}
        />
        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { rooms: state.rooms, user: state.user, openRooms: state.openRooms }
}

export default connect(mapStateToProps)(RoomFormContainer)
