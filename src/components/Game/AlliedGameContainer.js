import React, { Component } from 'react'
import AlliedGame from '../Game/AlliedGame'
import request from 'superagent'
import { url } from '../../constants'
import { connect } from 'react-redux'
import alliedQuestions from './alliedQuestions'


class AlliedGameContainer extends Component {

  handleEvent = (event) => {
    if (event.target.value === alliedQuestions[0].answers[0]) {
      
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

  resetAnswers = () => {
    request
      .put(`${url}/user/${this.props.user.userId}/resetAnswer`)
      .send({
        answered: false
      })
      .catch(console.error)
  }

  render() {
    const room = this.props.rooms.filter(room => {
      if (Number(this.props.room) === room.id){
        return room
      }
    })
    
    const questionNumber = room.map(room => room.round)
  
    const bothPlayersAnswered = room[0].users.filter(user => {
      return user.answered === true
    })


    if (bothPlayersAnswered.length === 2) {
      this.resetAnswers()
    }
    
    console.log('question:', questionNumber)
    
    const question = alliedQuestions[questionNumber[0]].q
    const answers = alliedQuestions[questionNumber[0]].answers

    return (
      <AlliedGame
        handleEvent={this.handleEvent} 
        question={question}
        answers={answers} />
    )
  }
}



const mapStateToProps = (state) => {

  return {
    user: state.user,
    rooms: state.rooms 
  }
}

export default connect(mapStateToProps)(AlliedGameContainer)


