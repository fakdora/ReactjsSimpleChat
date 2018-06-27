import {
  users, messages,
} from './_DATA'


export function getUsers() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...users }), 1000)
  })
}

export function getMessages() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...messages }), 1000)
  })
}

export function getInitialData() {
  return Promise.all([
    getUsers(),
    getMessages(),
  ]).then(([users, messages]) => ({
      users, 
      messages,
  }))
}
