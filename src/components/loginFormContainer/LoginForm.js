import React from 'react'

export default class LoginForm extends React.Component {

  render(){
    return <div className="login-form">
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
          type='text'
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