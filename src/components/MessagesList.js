import React, { Component } from 'react'
import { connect } from 'react-redux'


class MessagesList extends Component {

  render() {

    const { messages } = this.props

    return (
      <div>
        <h3>Messages</h3>
        <ul>
    {
      (messages)
      ? messages.map((message) => {
        let key = message.author + message.timestamp
        return <li
          key={key}
        >{message.author}: {message.text}</li>
      })
      : <li></li>
    }
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ messages, users }) {

  return {
    messages,
    users
  }
}

export default connect(mapStateToProps)(MessagesList)
