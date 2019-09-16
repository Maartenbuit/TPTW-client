import { ROOMS } from '../actions'

export default function setRooms(
  state = [], action = {}
) {
  switch(action.type) {
    case ROOMS: {
      return action.payload
    }
    default:
      return state
  }
}