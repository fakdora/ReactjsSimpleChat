import React, { Component } from 'react'
import { connect } from 'react-redux'

import { MAX_LENGTH_MESSAGE } from './Constants'
import { addMessage } from '../actions/messages'
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
    this.props.dispatch(addMessage(this.state.newMessage), CURRENT_USER)
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
