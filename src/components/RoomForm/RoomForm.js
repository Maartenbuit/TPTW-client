import React from 'react'
import { Link } from 'react-router-dom'


export default class RoomForm extends React.Component {
  render() {
    return <div>
      <form onSubmit={this.props.onSubmit}>
        <input 
        type='text'
        onChange={this.props.onChange}
        value={this.props.name} 
        placeholder='room'/>
        <button > create </button>
      </form>
      <div>
        {!this.props.rooms ? 'Loading...' : 
          <ul> {this.props.openRooms.map(room => {
            return <li key={room.id} ><Link to={`/room/${room.id}`}>{room.name}</Link></li>
          })
          }</ul>
        }
      </div>
  </div>
  }  
}