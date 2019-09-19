import React, { Component } from 'react'
import AxisGame from '../Game/AxisGame'
import request from 'superagent'
import { url } from '../../constants'
import { connect } from 'react-redux'

class AxisGameContainer extends Component {
  axisQuestions = [
    { q1: 'Who started the first WW?', answers: ['Germany', 'Holland', 'Poland'] },
    { q2: 'Who started the 2nd WW?', answers: ['1', '2', '3'] },
    { q3: 'Who started the 3rd WW?', answers: ['a', 'b', 'c'] }
  ]

  handleEvent = (event) => {
    if (event.target.value === this.axisQuestions[0].answers[0]) {
      // console.log(axisQuestions[0].answers[0])

      request
        .put(`${url}/user/${this.props.user.userId}/alliedgame`)
        .send({
          score: +1,
          answered: true
        })
        .catch(console.error)

      return alert('true')

    } else {
      return alert('FALSE!!!!')
    }
  }

  render() {
    const question = this.axisQuestions[0].q1
    //const answers1 = this.axisQuestions[0].answers
    console.log('axisQuestions[0].answers', this.axisQuestions[0].answers)
    console.log('this.axisQuestions test:', this.axisQuestions)
    return (
      <AxisGame
        handleEvent={this.handleEvent}
        axisQuestions={this.axisQuestions} 
        question={question} />
    )
  }
}

const mapStateToProps = (state) => {
  console.log(' LOG state', state)

  return { user: state.user }
}

export default connect(mapStateToProps)(AxisGameContainer)

