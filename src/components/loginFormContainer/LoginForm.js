import React from 'react'
import { Link } from 'react-router-dom'

export default class LoginForm extends React.Component {

  render(){
    return <div className="login-form">
      {this.props.user.jwt && <Link to={`/rooms`}><button>Go to lobby</button></Link>}
      {this.props.values.loggedIn && !this.props.user.jwt ? <div>Please supply a valid name and password to log in.</div> : ''}
      <form onSubmit={this.props.onSubmit}>
        <label>
          Name:
          <input 
          type='text' 
          value={this.props.name} 
          name='name' 
          placeholder='enter your name' 
          onChange={this.props.onChange} 
          />
        </label>

        <label>
          password:
          <input
          type='password'
          value={this.props.password}
          name='password'
          placeholder='enter password'
          onChange={this.props.onChange}
          />
        </label>
        <button type='submit'>Login</button>
      </form>
      </div>
  }
}