export const ROOMS = 'ROOMS'

export function setRooms (rooms) {
  return {
    type: ROOMS,
    payload: rooms
  }
}