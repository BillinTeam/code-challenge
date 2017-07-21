import React, { Component } from 'react';

import './theme/Cards.css'

import Header from './components/Header'
import Footer from './components/Footer'
import Page from './components/Page'

class App extends Component {

  // Renders
  render() {
    return (
      <div className="App">
        <Header />
        <Page />
        <Footer />
      </div>
    );
  }
}

export default App;
