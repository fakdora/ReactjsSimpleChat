import { getInitialData } from '../utils/api'
import { receiveMessages } from './messages'
import { receiveUsers } from './users'
import { showLoading, hideLoading } from 'react-redux-loading'


export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, messages }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveMessages(messages))
        dispatch(hideLoading())
      })
  }
}
