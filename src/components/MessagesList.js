import React, { Component } from 'react';
import { connect } from 'react-redux'

import { getMessages } from '../utils/api'


class MessagesList extends Component {
  // state = {
  //   messages: []
  // }

  // fetchAllMessages = () => {
  //   getMessages()
  //     .then((messages) => {
  //       this.setState({'messages': messages.messages})
  //     })
  // }

  componentDidMount () {
    // this.fetchAllMessages()
  }

  render() {

    const { messages } = this.props
    console.log('props msgs: ', messages)
    console.log('typeof msgs: ', typeof messages)
    return (
      <div>
        <h3>Messages</h3>
        <ul>
        { (messages)
          ? messages.map((message) => {
              let key = message.author + message.timestamp
              return <li
                key={key}
              >{message.author }: {message.text}</li>
            })
          : <li></li>
        }
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ messages }) {
  console.log("from mapstatetoprops: ", messages)
  if (messages) {
    console.log('yes')
  } else {
    console.log('no')
  }
  return {
    messages
  }
}

export default connect(mapStateToProps)(MessagesList)
