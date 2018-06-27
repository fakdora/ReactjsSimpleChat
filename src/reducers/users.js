import {
  RECEIVE_USERS,
  UPDATE_LAST_ACTIVE_TIMESTAMP
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
      console.log('state: ', state)
      console.log('state.users, ', state.users)
      for (var i = 0; i < state.length; i++) {
        if (state[i].id === action.user.id) {
          console.log('FOUND, ', state[i], '  ', action.user.id)
          state[i]['lastActiveTimestamp'] = Date.now()
          state[i]['status'] = 'active'
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