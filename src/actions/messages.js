import { showLoading, hideLoading } from 'react-redux-loading'
import { CURRENT_USER } from '../constants/authedUser'

export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES"
export const ADD_MESSAGE = "ADD_MESSAGE"

export function receiveMessages(messages) {
  return {
    type: RECEIVE_MESSAGES,
    messages,
  }
}

export function addMessage(message) {
  return {
    type: ADD_MESSAGE,
    message: formatMessage(message, CURRENT_USER)
  }
}


function formatMessage({ message, author }) {
  return {
    text: message,
    author,
    timestamp: Date.now(),
  }
}
