import {JWT} from '../actions'
import {SET_ROOM_ID_IN_USER} from '../actions'

export default function (state = '', action = {}) {
  switch (action.type) {
    case JWT:
      return action.payload
    case SET_ROOM_ID_IN_USER:
      return action.payload
    default:
      return state
  }
}