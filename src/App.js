import React, { Component } from 'react';

import Header from './components/Header'
import Footer from './components/Footer'

class App extends Component {

  // Renders
  render() {
    return (
      <div className="App">
        <Header />
        { this.props.children }
        <Footer />
      </div>
    );
  }
}

export default App;
