import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setRoomIdInUser } from '../../actions'

class GameContainer extends Component {
  
  componentDidMount() {
    console.log('roomId:', Number(this.props.match.params.id))
    this.props.setRoomIdInUser(Number(this.props.match.params.id), this.props.user.userId)
    // this.props.getRoomWithUser()
  }
  
  render() {
    return (
      <div>
        <h1>hello</h1>
      </div>
    )
  }
}

const mapDispatchToProps = {
  setRoomIdInUser,
  // getRoomWithUser
}

const mapStateToProps = (state) => {
  return {
    // room: state.room,
    user: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer)
