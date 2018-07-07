import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import {ConnectedRouter } from 'connected-react-router'
import ServerMsg from '../containers/ServerMsg';
class App extends Component {

  render() {

    return (
      <ConnectedRouter history={this.props.history}>
      <div className="container app">
        <Header />
        <ServerMsg />
        <Main />
      </div>
      </ConnectedRouter>
    );
  }
}

export default App;