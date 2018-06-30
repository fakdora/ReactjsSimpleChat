import React, { Component } from 'react'
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

  render() {
    return (
      <div>
        <Container>
          <Header as='h3' content="Gamers' Chatroom" style={style.h3} textAlign='center' />
          <Grid columns={2} doubling stackable>
            <Grid.Column width={10} className="chat-box">
              <Segment><MessagesList /></Segment>
              <NewMessage />
            </Grid.Column>
            <Grid.Column width={6} className="user-box">
              <Segment><UsersList /></Segment>
            </Grid.Column>
          </Grid>
          
        </Container>
      </div>
    );
  }
}

export default Layout;
