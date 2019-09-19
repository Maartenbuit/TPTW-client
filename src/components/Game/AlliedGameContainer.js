import React, { Component } from 'react'
import AlliedGame from '../Game/AlliedGame'
import request from 'superagent'
import { url } from '../../constants'
import { connect } from 'react-redux'

class AlliedGameContainer extends Component {
  alliedQuestions = [
    { q1: 'Allies: Who started the first WW?', answers: ['Germany', 'Holland', 'Poland'] },
    { q2: 'Allies: Who started the 2nd WW?', answers: ['1', '2', '3'] },
    { q3: 'Allies: Who started the 3rd WW?', answers: ['a', 'b', 'c'] }
  ]

  handleEvent = (event) => {
    if (event.target.value === this.alliedQuestions[0].answers[0]) {
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
    const room = this.props.rooms.filter(room => {
      //console.log("ROOM.USER",room.users)
      if(this.props.user.userId === room.users[0].id){
        return room
      }else if(this.props.user.userId === room.users[1].id){
        return room
      }
    })
    const questionNumber = room[0].round
    console.log(questionNumber)
    const question = this.alliedQuestions[0].q1
    //const answers1 = this.axisQuestions[0].answers
    console.log('alliedQuestions[0].answers', this.alliedQuestions[0].answers)
    console.log('this.alliedQuestions test:', this.alliedQuestions)
    return (
      <AlliedGame
        handleEvent={this.handleEvent}
        alliedQuestions={this.alliedQuestions} 
        question={question} />
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


