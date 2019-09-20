import React, { Component } from 'react'

export default class GameOver extends Component {
  render() {
    const allied = this.props.users.filter(user => user.allies === true)
    const axis = this.props.users.filter(user => user.allies === false)
    const alliedVictory = allied[0].score > axis[0].score
    const axisVictory = allied[0].score < axis[0].score
    const staleMate = allied[0].score == axis[0].score

    return (
      <div>
        <h1>Game Over</h1>
        {alliedVictory && <h1> The Allied Forces are victorious! </h1>}
        {axisVictory && <h1> The Axis Forces are victorious! </h1>}
        {staleMate && <h1> It's a draw. Back to the trenches!</h1>}
      </div>
    )
  }
}
