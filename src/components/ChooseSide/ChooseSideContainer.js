import React from 'react'
import  { setSide } from '../../actions'
import ChooseSide from './ChooseSide'
import { connect } from 'react-redux'
import request from 'superagent'
import { url } from '../../constants'
import userId  from '../Game/GameContainer'
import AlliedGameContainer from '../Game/AlliedGameContainer'
import AxisGameContainer from '../Game/AxisGameContainer'

console.log("TEST18:", userId )

class ChooseSideContainer extends React.Component {
  state = { allies: false, axis: false, choosingSide: true }

  handleClick = (allies) => {
    if (allies) {
      request
        .put(`${url}/user/${this.props.user.userId}/allies`)
        .send({ allies: true })
        .then(res => {
          this.setState({ allies: true, choosingSide: false })
        })
        .catch(console.error)
    } else {
      // request
        // .put(`${url}/user/${this.props.user.userId}/allies`)
        // .send({ allies: false })
        // .then(res => {
          this.setState({ axis: true, choosingSide: false })
        // })
        // .catch(console.error)
    }

    // if (allies) {
    //   this.props.history.push('/game/allies')
    // } else {
    //   this.props.history.push('/game/axis')
    // }
  }


  render() {
    return <div> 
      {this.state.allies && <AlliedGameContainer />}
      {this.state.axis && <AxisGameContainer />}
      {this.state.choosingSide && <ChooseSide
      handleClick={this.handleClick} />}
      </div>
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