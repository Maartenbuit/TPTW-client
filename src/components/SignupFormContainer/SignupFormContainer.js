import React from 'react'
import SignupForm from './SignupForm'
// import { connect } from 'react-redux'
// import { signup } from '../../actions'
import request from 'superagent'
const { url } = require('../../constants')
import ('./SignUpForm.css')

export default class SignupFormContainer extends React.Component {
  state = { name: '', password: '' }

  signUp = (name, password) => {
    request
      .post(`${url}/user`)
      .send({ name, password })
      .then(res => {
        console.log(res.body)
      })
      .catch(console.error)
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.signUp(this.state.name, this.state.password)
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

// export default connect(null, { signup })(SignupFormContainer)




