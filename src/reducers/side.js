import { SIDE } from '../actions'

export default function chooseSide(
  state = [], action = {}
) {
  switch(action.type) {
    case SIDE: {
      return action.payload
    }
    default:
      return state
  }
}