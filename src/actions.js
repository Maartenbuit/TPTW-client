import request from 'superagent'
const { url } = require('./constants')

export const ROOMS = 'ROOMS'

export function setRooms (rooms) {
  return {
    type: ROOMS,
    payload: rooms
  }
}

export const JWT = 'JWT'

function jwt(payload) {
  return{
    type: JWT,
    payload
  }
}

export const login = (name, password) => dispatch => {  
  request
  .post(`${url}/login`)
  .send({ name, password })
  .then(res => {
    const action = jwt(res.body)
    dispatch(action)
  })
  .catch(console.error)
}

export const SIDE = 'SIDE'

export function setSide(side) {
return {
  type: SIDE,
  payload: side
  }
}

export const SET_OPEN_ROOMS = 'SET_OPEN_ROOMS'

export function setOpenRooms(openRooms) {
  return {
    type: SET_OPEN_ROOMS,
    payload: openRooms
  }
}
