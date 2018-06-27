import {
  users, messages,
} from './_DATA'


function generateUID() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

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

// export function getMessages() {
//   return Promise.all([_getMessages()])
//     .then(([messages]) => ({
//       messages
//     }))
// }



export function getInitialData() {
  return Promise.all([
    getUsers(),
    getMessages(),
  ]).then(([users, messages]) => ({
      users, 
      messages,
  }))
}
