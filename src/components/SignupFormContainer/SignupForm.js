import React from 'react'
import { Link } from 'react-router-dom'

export default class SignupForm extends React.Component {

  render() {
    return <div className="form-container">
      <form className="form" onSubmit={this.props.onSubmit}>

        <h2>Sign up to play</h2>

        <label>
          Name:
          <input
            type='text'
            value={this.props.name}
            name='name'
            placeholder='enter your name'
            onChange={this.props.onChange}
          />
        </label>

        <label>
          password:
          <input
            type='text'
            value={this.props.password}
            name='password'
            placeholder='enter password'
            onChange={this.props.onChange}
          />
        </label>
        <button type='submit'>Sign up</button>

        <p>If you already are registered please <Link to={`/login`}>click here</Link></p>
        <br></br>
      </form>
    </div>
  }
}