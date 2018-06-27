export const RECEIVE_USERS = 'RECEIVE_USERS'
export const UPDATE_LAST_ACTIVE_TIMESTAMP = 'UPDATE_LAST_ACTIVE_TIMESTAMP'


export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export function updateLastActiveTimestamp(user) {
  return {
    type: UPDATE_LAST_ACTIVE_TIMESTAMP,
    user,
  }
}
