import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, TextArea, Button } from 'semantic-ui-react'

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
        <Form className="new-message" onSubmit={this.handleSubmit}>
          
          <TextArea type="text"
            className="input"
            placeholder="Send a message. Example: hi @mario"
            value={newMessage}
            name="newMessage"
            onChange={this.handleChange}
            maxLength={MAX_LENGTH_MESSAGE}
          /> 
          <Button
            positive
            className="btn"
            type="submit"
            disabled={newMessage === ""}
          >
            Send
          </Button>
        </Form>
      </div>
    );
  }
}

export default connect()(NewMessage)
