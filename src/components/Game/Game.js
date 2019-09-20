import React, { Component } from 'react'

export default class Game extends Component {
  

  render() {
    
    return (
      <div>
        {this.props.users.length === 0 && 'loading...' }
        {this.props.users.length === 1 && 'waiting for other player'}
        {this.props.users.length === 2 && 
        <div>
        <h1>{`Game on ${this.props.users[0].name} & ${this.props.users[1].name}!`}</h1>
        
        <h4>{this.props.users[0].name}'s score: {this.props.users[0].score}</h4>
        <h4>{this.props.users[1].name}'s score: {this.props.users[1].score}</h4>
        </div>
        } 
        {console.log('user:', this.props.users)}
        
      </div>
    )
  }
}
