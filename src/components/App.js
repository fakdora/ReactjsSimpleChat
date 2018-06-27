import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'

import Layout from './Layout'
import { handleInitialData } from '../actions/shared'

class App extends Component {

  componentDidMount() {
      this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
        <LoadingBar />
        <Layout />
      </div>
    );
  }
}

function mapStateToProps({users}) {
  return {
    loading: users === null
  }
}

export default connect()(App)
