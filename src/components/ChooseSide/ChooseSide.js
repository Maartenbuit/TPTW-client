import React from 'react'
//import { Link } from 'react-router-dom'

export default class ChooseSide extends React.Component {

  render() {
    return (
      <div>
        <h1> Choose your side</h1>
        <button
          onClick={() => this.props.handleClick(false)}
        >AXIS</button>
 
        <button
          onClick={() => this.props.handleClick(true)}
        >ALLIES</button>
      </div>
    )
  }
}