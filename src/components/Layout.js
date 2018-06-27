import React, { Component } from 'react';
import {
  Grid,
  Header,
  Segment,
  Container,
} from 'semantic-ui-react'

import MessagesList from './MessagesList'
import UsersList from './UsersList'
import NewMessage from './NewMessage'

const style = {
  h1: {
    marginTop: '3em',
  },
  h2: {
    margin: '4em 0em 2em',
  },
  h3: {
    marginTop: '2em',
    padding: '2em 0em',
  },
  last: {
    marginBottom: '300px',
  },
}

class Layout extends Component {

  handleMessageSubmit = (e, msg) => {
    e.preventDefault()
    // console.log('e  ',  msg)
    console.log('message in here ', msg)
  }

  render() {
    return (
      <div>
        <Container>
          <Header as='h3' content='Chat room' style={style.h3} textAlign='center' />
          <Grid columns={2} doubling stackable>
            <Grid.Column width={10}>
              <Segment><MessagesList /></Segment>
              <NewMessage handleMessageSubmit={this.handleMessageSubmit} />
            </Grid.Column>
            <Grid.Column width={6}>
              <Segment><UsersList /></Segment>
            </Grid.Column>
          </Grid>
          
        </Container>
      </div>
    );
  }
}

export default Layout;
