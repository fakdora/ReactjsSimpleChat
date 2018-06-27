import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES"
export const ADD_MESSAGE = "ADD_MESSAGE"

export function receiveMessages(messages) {
  return {
    type: RECEIVE_MESSAGES,
    messages,
  }
}
