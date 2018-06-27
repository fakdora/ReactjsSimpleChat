import React, { Component } from 'react'
import { connect } from 'react-redux'

import { handleAddMessage } from '../actions/messages'
import { MAX_LENGTH_MESSAGE } from '../constants/message'
import { CURRENT_USER } from '../constants/authedUser'


class NewMessage extends Component {

  state = {
    newMessage: ""
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('newMessage submitted', this.state.newMessage)
    this.setState(() => ({ newMessage: ""}))
    this.props.dispatch(handleAddMessage(this.state.newMessage))
  }

  render() {
    const { newMessage } = this.state

    return (
      <div>
        <form className="new-message" onSubmit={this.handleSubmit}>
          
          <textarea type="text"
            className="input"
            placeholder="Type your message"
            value={newMessage}
            name="newMessage"
            onChange={this.handleChange}
            maxLength={MAX_LENGTH_MESSAGE}
          /> 
          <button
            className="btn"
            type="submit"
            disabled={newMessage === ""}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(NewMessage)
