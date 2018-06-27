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
      let newState = [...state, action.message]
      return newState.slice(newState.length - 50, newState.length)
    }

    case RESPOND_MESSAGE: {
      let newState = [...state, action.message]
      return newState.slice(newState.length - 50, newState.length)
    } 

    default: {
      return state
    }

  }
}