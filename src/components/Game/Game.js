import React, { Component } from 'react'

export default class Game extends Component {
  

  render() {
    
    return (
      <div>
        {this.props.users.length === 0 && 'loading...' }
        {this.props.users.length === 1 && 'waiting for other player'}
        {this.props.users.length === 2 && 'Game on!'} 
        
      </div>
    )
  }
}
