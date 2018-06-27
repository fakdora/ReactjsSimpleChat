import {
  RECEIVE_USERS,
  UPDATE_LAST_ACTIVE_TIMESTAMP,
  UPDATE_USER_STATUS
} from '../actions/users'

export default function users(state=[], action) {
  switch (action.type) {
    case RECEIVE_USERS: {
      return [
        ...state,
        ...action.users.users
      ]
    }

    case UPDATE_LAST_ACTIVE_TIMESTAMP: {
      for (var i = 0; i < state.length; i++) {
        if (state[i].id === action.user.id) {
          state[i]['lastActiveTimestamp'] = Date.now()
          state[i]['status'] = 'active'
          break
        }
      }
      return [...state]
    }

    case UPDATE_USER_STATUS: {
      for (var i = 0; i < state.length; i++) {
        if (state[i].id === action.user.id) {
          state[i]['status'] = action.status
          break
        }
      }
      return [...state]
    }

    default: {
      return state
    }
  }
}