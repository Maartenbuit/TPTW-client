import React from 'react'
import LoginForm from './LoginForm'
import { connect } from 'react-redux'
import { login } from '../../actions'
import './LoginForm.css'

class LoginFormContainer extends React.Component {
  state = { name: '', password: '', loggedIn: false }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.login(this.state.name, this.state.password)
    this.setState({
      name: '',
      password: '',
      loggedIn: true
    })
    
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  checkLogin = () => {
    this.props.history.push('/rooms')
  }

  render() {
    return <LoginForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
      user={this.props.user}
      checkLogin={this.checkLogin}
    />
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, { login })(LoginFormContainer)