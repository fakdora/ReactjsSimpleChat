import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, TextArea, Button, Grid } from 'semantic-ui-react'

import { handleAddMessage } from '../actions/messages'
import { MAX_LENGTH_MESSAGE } from '../constants/message'


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
          <Grid>
            <Grid.Column width={13}>
              <TextArea type="text"
                className="input"
                placeholder="Send a message. Example: hi @mario"
                value={newMessage}
                name="newMessage"
                onChange={this.handleChange}
                maxLength={MAX_LENGTH_MESSAGE}
              /> 
            </Grid.Column>
            
            <Grid.Column width={3}>
              <div className="btn-wrapper">
                <Button
                  positive
                  className="btn"
                  type="submit"
                  disabled={newMessage === ""}
                >
                  Send
                </Button>
              </div>
            </Grid.Column>
          </Grid>


        </Form>
      </div>
    );
  }
}

export default connect()(NewMessage)
