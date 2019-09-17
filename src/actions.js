import request from 'superagent'
const { url } = require('./constants')

export const SET_ROOM_ID_IN_USER = 'SET_ROOM_ID_IN_USER'

export function roomIdInUser (roomId) {
  return {
    type: SET_ROOM_ID_IN_USER,
    payload: roomId
  }
}

export const setRoomIdInUser = (roomId, userId) => dispatch => {

  request
    .put(`${url}/user/${userId}`)
    .send({roomId})
    .then(response => {
      const action = roomIdInUser(response.body)
      dispatch(action)
    })
}


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
    console.log(res.message)
    const action = jwt(res.body)
    dispatch(action)
  })
  .catch(console.error)
}

export const SIDE = 'SIDE'

export function chooseSide(side) {
return {
  type: SIDE,
  payload: side
}
}


// export const signup = (name, password) => dispatch => {
//     request
//     .post(`${url}/user`)
//     .send({ name, password })
//     .then(res => {
//       const action = jwt(res.body)
//       dispatch(action)
//     })
//     .catch(console.error)
//   }