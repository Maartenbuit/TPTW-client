import { combineReducers } from 'redux'
import rooms from './rooms'
import user from './user'
import side from './side'

export default combineReducers({
  rooms,
  user,
  side
})