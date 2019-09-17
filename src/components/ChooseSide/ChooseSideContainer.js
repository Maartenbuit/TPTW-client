import React from 'react'
import ChooseSide from './ChooseSide'
import { connect } from 'react-redux'
import request from 'superagent'
import { url } from '../../constants'

class ChooseSideContainer extends React.Component {
  state = { allies: null }

  handleClick = (allies) => {
    if (allies) {
      request
        .post(`${url}/user/:id`)
        .send({ allies })
        .then(response => {
          this.setState({ allies: true })
        })
        .catch(console.error)

      // this.setState({ allies: true });
      // console.log("ALLIES");

    } else {
      this.setState({ allies: false });
      console.log("AXIS");
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

export default connect(null, { ChooseSide })(ChooseSideContainer)