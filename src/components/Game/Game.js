import React, { Component } from 'react'

export default class Game extends Component {
  

  render() {

    return (
      <div>
        <h1>Player one: {this.props.values.playerOne}</h1>
        <h1>Player Two: {this.props.values.playerTwo}</h1>
        
      </div>
    )
  }
}
