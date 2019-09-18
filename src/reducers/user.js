import {JWT} from '../actions'

export default function user(state = '', action = {}) {
  switch (action.type) {
    case JWT:
      return action.payload
    default:
      return state
  }
}