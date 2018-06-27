import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'

import Layout from './Layout'
import { handleInitialData } from '../actions/shared'
import { handleAutoAddMessageByBot } from '../actions/messages'
import { updateUserStatus } from '../actions/users'
import { findRandomNumber } from '../utils/helpers'
import { ACTIVE_TO_IDLE_TIME_IN_SECONDS } from '../constants/users'


class App extends Component {

  autoChatByBot = () => {
    try {
      setInterval(
        async () => {
          const { usersWhoCanRespond } = this.props
          const randomUserIndex = findRandomNumber(0, usersWhoCanRespond.length-1)
          const randomUser = usersWhoCanRespond[randomUserIndex]
          if (randomUser.status !== "away") {
            const randomMessageIndex = findRandomNumber(0, randomUser.responses.length-1)
            this.props.dispatch(handleAutoAddMessageByBot(
              randomUser.responses[randomMessageIndex], randomUser)
            )
          }
        }, 10000
    )} catch (e) {
      console.log(e)
    }
  }

  changeToIdleStatus = () => {
    try {
      setInterval(async () => {
        const { active } = this.props
        const currentTime = Date.now()
        let timeDifferenceInSeconds = 0
        active.forEach((user) => {
          timeDifferenceInSeconds = (currentTime - user.lastActiveTimestamp) / 1000
          
          if (timeDifferenceInSeconds > ACTIVE_TO_IDLE_TIME_IN_SECONDS) {
            this.props.dispatch(updateUserStatus(user, 'idle'))
          }
        })
        
      }, 5000)
    } catch (e) {
      console.log(e)
    }
    


  }

  componentDidMount() {
    this.props.dispatch(handleInitialData())
    this.autoChatByBot()
    this.changeToIdleStatus()
  }

  render() {
    return (
      <div>
        <LoadingBar />
        <Layout />
      </div>
    );
  }
}

function mapStateToProps({users}) {
  const usersWhoCanRespond = users.filter((user) => (user.status !== "away"))
  const active = users.filter((user) => (user.status === "active"))
  return {
    loading: users === null,
    usersWhoCanRespond,
    active
  }
}

export default connect(mapStateToProps)(App)
