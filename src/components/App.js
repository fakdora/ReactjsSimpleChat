import React, { Component } from 'react';
import Layout from './Layout'
import { handleInitialData } from '../actions/shared'

class App extends Component {

  componentDidMount() {
      this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
        <Layout />
      </div>
    );
  }
}

export default App;
