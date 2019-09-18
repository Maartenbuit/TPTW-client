import React, { Component } from 'react'
import request from 'superagent'
import { connect } from 'react-redux'

import { url } from '../../constants'
import { setRooms } from '../../actions'

import RoomForm from './RoomForm'

class RoomFormContainer extends Component {
  state ={ 
    name: '',
    rooms: []
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
    return (
      <div className="App">
        <RoomForm
        name={this.state.name}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        rooms={this.props.rooms}
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
