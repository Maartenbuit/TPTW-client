import React from 'react'
import  { setSide } from '../../actions'
import ChooseSide from './ChooseSide'
import { connect } from 'react-redux'
import request from 'superagent'
import { url } from '../../constants'
import AlliedGameContainer from '../Game/AlliedGameContainer'
import AxisGameContainer from '../Game/AxisGameContainer'


class ChooseSideContainer extends React.Component {

  handleClick = (allies) => {
    if (allies) {
      request
        .put(`${url}/user/${this.props.user.userId}/allies`)
        .send({ allies: true })
        .then(res => {
          
        })
        .catch(console.error)
    } else {
      const userId = this.props.users.filter(user => {
        return this.props.user.userId !== user.id
      })
      request
        .put(`${url}/user/${userId[0].id}/allies`)
        .send({ allies: true })
        .then(res => {
          
        })
        .catch(console.error)
      
    }
    
  }


  render() {
    const AllyUser = this.props.users.filter(user => {
      return user.allies === true
    })
    
    return <div> 
      {AllyUser.length === 0 && <ChooseSide
      handleClick={this.handleClick} />}
      {AllyUser.length === 1 && this.props.user.userId === AllyUser[0].id && <AlliedGameContainer room={this.props.room}/>}
      {AllyUser.length === 1 && this.props.user.userId !== AllyUser[0].id && <AxisGameContainer room={this.props.room}/>}
      
      </div>
  }
}



const mapDispatchToProps = {
  setSide,
  
}

const mapStateToProps = (state) => {  

  return { user: state.user, side: state.side }
}


export default connect(mapStateToProps, mapDispatchToProps)(ChooseSideContainer)