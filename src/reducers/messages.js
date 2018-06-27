import { RECEIVE_MESSAGES } from '../actions/messages'


export default function messages(state={}, action) {

  switch (action.type) {
    case RECEIVE_MESSAGES: {
      console.log('action.msg: ', action.messages)
      console.log('typeof action.messages: ', typeof action.messages)
      return {
        ...state,
        ...action.messages
      }
    }

    default: {
      return state
    }

  }
}