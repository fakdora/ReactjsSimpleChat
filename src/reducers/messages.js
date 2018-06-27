import { 
  RECEIVE_MESSAGES, 
  ADD_MESSAGE,
  RESPOND_MESSAGE 
} from '../actions/messages'


export default function messages(state=[], action) {

  switch (action.type) {
    case RECEIVE_MESSAGES: {
      return [
        ...state,
        ...action.messages.messages
      ]
    }

    case ADD_MESSAGE: {
      return [
        ...state,
        action.message
      ]
    }

    case RESPOND_MESSAGE: {
      return [
        ...state,
        action.message
      ]
    } 

    default: {
      return state
    }

  }
}