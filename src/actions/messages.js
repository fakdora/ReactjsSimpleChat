import { showLoading, hideLoading } from 'react-redux-loading'
import { CURRENT_USER } from '../constants/authedUser'
import { updateLastActiveTimestamp } from './users';

export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES"
export const ADD_MESSAGE = "ADD_MESSAGE"
export const RESPOND_MESSAGE = "RESPOND_MESSAGE"

export function receiveMessages(messages) {
  return {
    type: RECEIVE_MESSAGES,
    messages,
  }
}

export function handleAddMessage(message) {
  return (dispatch, getState) => {
    const formattedMessage = formatMessage(message, CURRENT_USER)
    dispatch(addMessage(formattedMessage))
    dispatch(handleRespondMessageFromBot(message))
  }
}

function handleRespondMessageFromBot(message) {
  return (dispatch, getState) => {
    const match = messageContainsUserHandle(message)

    if (match !== null) {
      const { users } = getState()

      const bot = findMatchingBot(users, match)
      if (bot !== null) {
        dispatchResponseFromBot(bot, dispatch)
      }
    }
  }
}

function findMatchingBot(users, match) {
  const userHandle = match[0].substring(1).toLowerCase()
  for (var i = 0; i < users.length; i++) {
    if (users[i].id.toLowerCase() === userHandle) {
      return users[i]
    }
  }

  return null
}

function dispatchResponseFromBot(bot, dispatch) {
  
  if (bot.status === "away") {
    displayAwayMessage(bot, dispatch)
    return
  }

  const maximum = bot.responses.length - 1
  const minimum = 0
  const randomResponseIndex = Math.floor(
      Math.random() * (maximum - minimum + 1)
    ) + minimum
  const formattedResponse = formatMessage(bot.responses[randomResponseIndex], bot.id)
  dispatch(respondMessage(formattedResponse))
  dispatch(updateLastActiveTimestamp(bot))
}

function displayAwayMessage(bot, dispatch) {
  let message = "User can't respond to you right now. "

  if (bot.currentlyPlayingGame) {
    message += `Currently playing ${bot.currentlyPlayingGame}.`
  } else {
    message += "Currently logged off."
  }
  const formattedResponse = formatMessage(message, 'admin')
  dispatch(respondMessage(formattedResponse))
}


function messageContainsUserHandle(message) {
  const nameRegex = /@[\w]+/
  const match = nameRegex.exec(message);

  return match
}

function addMessage(message) {
  return {
    type: ADD_MESSAGE,
    message: message
  }
}

function respondMessage(message) {
  return {
    type: RESPOND_MESSAGE,
    message: message,
  }
}


function formatMessage(message, author) {
  return {
    text: message,
    author,
    timestamp: Date.now(),
  }
}
