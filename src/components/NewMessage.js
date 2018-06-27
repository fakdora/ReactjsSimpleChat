import React, { Component } from 'react';
import { MAX_LENGTH_MESSAGE } from './Constants'

class NewMessage extends Component {

  state = {
    message: ""
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('message submitted', this.state.message)
    this.setState(() => ({message: ""}))
  }

  render() {
    const { message } = this.state

    return (
      <div>
        <form className="new-message" onSubmit={(e) => this.props.handleMessageSubmit(e, this.state.message)}>
          
          <textarea type="text"
            className="input"
            placeholder="Type your message"
            value={message}
            name="message"
            onChange={this.handleChange}
            maxLength={MAX_LENGTH_MESSAGE}
          /> 
          <button
            className="btn"
            type="submit"
            disabled={message === ""}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default NewMessage
