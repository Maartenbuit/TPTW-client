import React from 'react'
import  { setSide } from '../../actions'
import ChooseSide from './ChooseSide'
import { connect } from 'react-redux'
import request from 'superagent'
import { url } from '../../constants'
import userId  from '../Game/GameContainer'

console.log("TEST18:", userId )

class ChooseSideContainer extends React.Component {
  state = { allies: null }

  handleClick = (allies) => {
    if (allies) {
      request
        .put(`${url}/user/${this.props.user.userId}/allies`)
        .send({ allies: true })
        .then(res => {
          this.setState({ allies: true })
        })
        .catch(console.error)
    } else {
      // request
        // .put(`${url}/user/${this.props.user.userId}/allies`)
        // .send({ allies: false })
        // .then(res => {
          this.setState({ allies: false })
        // })
        .catch(console.error)
    }

    if (allies) {
      this.props.history.push('/game/allies')
    } else {
      this.props.history.push('/game/axis')
    }
  }


  render() {
    return <ChooseSide
      handleClick={this.handleClick} />
  }
}



const mapDispatchToProps = {
  setSide,
  
}

const mapStateToProps = (state) => {  
  console.log(' LOG state', state)

  return { user: state.user, side: state.side }
}


export default connect(mapStateToProps, mapDispatchToProps)(ChooseSideContainer)