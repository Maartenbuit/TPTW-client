import React, { Component } from 'react'
import AxisGame from '../Game/AxisGame'
import request from 'superagent'
import { url } from '../../constants'
import { connect } from 'react-redux'
import axisQuestions from './AxisQuestions'

class AxisGameContainer extends Component {

  state = {
    message: ""
  }


   handleEvent = (event) => {
    const room = this.props.rooms.filter(room => {
      if (Number(this.props.room) === room.id){
        return room
      }
    })
    
    const questionNumber = room.map(room => room.round)
    const correct = axisQuestions[questionNumber[0]].answers[0]
    console.log('correct test:', correct)
    const { value } = event.target
    console.log('value test:', value)
    const isCorrect = value === correct
    console.log('isCorrect test:', isCorrect)

    if (isCorrect) {
      this.setState({message: "Your answer is correct!"})
      
      request
        .put(`${url}/user/${this.props.user.userId}/alliedgame`)
        // .send({
        //   score: +1,
        //   answered: true
        // })
        .catch(console.error)
        return

    } else {
      this.setState({message: "Your answer is wrong!"})
      request
        .put(`${url}/user/${this.props.user.userId}/alliedgame1`)
        // .send({
        //   answered: true
        // })
        .catch(console.error)
        return
    } 
  }

  nextRound = () => {
    request
      .put(`${url}/room/${Number(this.props.room)}/nextRound`)
      .catch(console.error)

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
      this.nextRound()
    }
    
    const question = axisQuestions[questionNumber[0]].q
    const answers = axisQuestions[questionNumber[0]].answers

    return (
      <AxisGame
        handleEvent={this.handleEvent}
        question={question} 
        answers={answers}
        message={this.state.message} />
    )
  }
}

const mapStateToProps = (state) => {

  return { user: state.user, rooms: state.rooms }
}

export default connect(mapStateToProps)(AxisGameContainer)

