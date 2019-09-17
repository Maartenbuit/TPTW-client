import React from 'react'
import SignupForm from './SignupForm'
import { connect } from 'react-redux'
import { signup } from '../../actions'

class SignupFormContainer extends React.Component {
  state = { name: '', password: '' }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.signup(this.state.name, this.state.password)
    this.props.history.push('/login')
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return <SignupForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
    />
  }
}

export default connect(null, { signup })(SignupFormContainer)




