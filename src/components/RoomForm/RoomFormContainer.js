import React, { Component } from 'react'
import request from 'superagent'
import { connect } from 'react-redux'

import { url } from '../../constants'
import { setRooms } from '../../actions'

import RoomForm from './RoomForm'

class RoomFormContainer extends Component {
  state ={ 
    name: '',
    openRooms: []
    }

  onChange = (event) => {
    const { target: { value } } = event

    this.setState({ name: value })
    
  }

  onSubmit = (event) => {
    event.preventDefault()
    setTimeout(this.getOpenRooms,1000)
    
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

  getOpenRooms = () => {
    const openRoomsArray = this.props.rooms.filter(room => {
      return room.users.length < 2
    })
    this.setState({ openRooms: openRoomsArray })
  }

  componentDidMount() {
    setTimeout(this.getOpenRooms,1000)
  }
  
  render() {
    
    return (
      <div>
        <RoomForm
        name={this.state.name}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        rooms={this.props.rooms}
        openRooms={this.state.openRooms}
        />
        
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

export default connect(mapStateToProps, mapDispatchToProps)(RoomFormContainer)
