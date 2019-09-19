import { combineReducers } from 'redux'
import rooms from './rooms'
import user from './user'
import side from './side'
import openRooms from './openRooms'


export default combineReducers({
  rooms,
  user,
  side,
  openRooms
})