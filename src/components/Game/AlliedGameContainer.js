import React, { Component } from 'react'
import AlliedGame from '../Game/AlliedGame'
import request from 'superagent'
import { url } from '../../constants'
import { connect } from 'react-redux'


class AlliedGameContainer extends Component {

  alliedQuestions = [
    { q: 'Allies: Who started the first WW?', answers: ['Germany', 'Holland', 'Poland'] },
    { q: 'Allies: Who started the 2nd WW?', answers: ['1', '2', '3'] },
    { q: 'Allies: Who started the 3rd WW?', answers: ['a', 'b', 'c'] },
  ]

  handleEvent = (event) => {
    const correct = this.alliedQuestions[0].answers[0]
    console.log('correct test:', correct)
    const { value } = event.target
    console.log('value test:', value)
    const isCorrect = value === correct
    console.log('isCorrect test:', isCorrect)

    if (isCorrect) {
      
      request
        .put(`${url}/user/${this.props.user.userId}/alliedgame`)
        .send({
          score: +1,
          answered: true
        })
        .catch(console.error)

      return alert('true')

    } else {
      request
        .put(`${url}/user/${this.props.user.userId}/alliedgame1`)
        .send({
          answered: true
        })
        .catch(console.error)
      return alert('FALSE!!!!')
    }
  }

  render() {
    const question = this.alliedQuestions[0].q
    //const answers1 = this.axisQuestions[0].answers
    // console.log('alliedQuestions[0].answers', this.alliedQuestions[0].answers)
    // console.log('this.alliedQuestions test:', this.alliedQuestions)
    return (
      <AlliedGame
        handleEvent={this.handleEvent}
        alliedQuestions={this.alliedQuestions} 
        question={question}
        rooms={this.props.rooms}
        />
    )
  }
}



const mapStateToProps = (state) => {
  console.log(' LOG state', state)

  return {
    user: state.user,
    rooms: state.rooms 
  }
}

export default connect(mapStateToProps)(AlliedGameContainer)


