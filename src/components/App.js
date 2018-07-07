import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import {ConnectedRouter } from 'connected-react-router'
class App extends Component {

  // Renders
  render() {

    return (
      <ConnectedRouter history={this.props.history}>
      <div className="container app">
        <Header />
        <Main />
      </div>
      </ConnectedRouter>
    );
  }
}

export default App;