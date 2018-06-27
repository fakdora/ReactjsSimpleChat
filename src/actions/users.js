export const RECEIVE_USERS = 'RECEIVE_USERS'
export const UPDATE_LAST_ACTIVE_TIMESTAMP = 'UPDATE_LAST_ACTIVE_TIMESTAMP'
export const UPDATE_USER_STATUS = 'UPDATE_USER_STATUS'


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

export function updateUserStatus(user, status) {
  return {
    type: UPDATE_USER_STATUS,
    user,
    status,
  }
}
