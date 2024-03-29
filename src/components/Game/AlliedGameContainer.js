import React, { Component } from 'react'
import AlliedGame from '../Game/AlliedGame'
import request from 'superagent'
import { url } from '../../constants'
import { connect } from 'react-redux'
import alliedQuestions from './alliedQuestions'
import right from '../../right2.wav'
import wrong from '../../wrong.wav'


class AlliedGameContainer extends Component {
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

    const correct = alliedQuestions[questionNumber[0]].answers[0]
    console.log('correct test:', correct)
    const { value } = event.target
    console.log('value test:', value)
    const isCorrect = value === correct
    console.log('isCorrect test:', isCorrect)

    if (isCorrect) {
      this.setState({message: "Your answer is correct!"})
      let audio = new Audio(right)
      audio.play()

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
      let audio = new Audio(wrong)
      audio.play()

      request
        .put(`${url}/user/${this.props.user.userId}/alliedgame1`)
        // .send({
        //   answered: true
        // })
        .catch(console.error)
      return 
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
    
    const question = alliedQuestions[questionNumber[0]].q
    const answers = alliedQuestions[questionNumber[0]].answers

    return (
      <AlliedGame
        handleEvent={this.handleEvent} 
        question={question}
        answers={answers} 
        message={this.state.message}/>
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


