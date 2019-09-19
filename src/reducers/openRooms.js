import {SET_OPEN_ROOMS} from '../actions'

export default function openRooms( state = [], action = {}) {
  switch (action.type) {
    case SET_OPEN_ROOMS: 
      return action.payload
    default: 
      return state
  }
}