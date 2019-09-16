import React from 'react'

export default class RoomForm extends React.Component {
  render() {
    return <div><form onSubmit={this.props.onSubmit}>
    <input 
    type='text'
    onChange={this.props.onChange}
    value={this.props.name} 
    placeholder='room'/>
    <button > create </button>
  </form>
  </div>
  }  
}