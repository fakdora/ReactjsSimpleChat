import { combineReducers } from 'redux'
import users from './users'
import messages from './messages'
import { loadingBarReducer } from 'react-redux-loading'


export default combineReducers({
  users,
  messages,
  loadingBar: loadingBarReducer
})
