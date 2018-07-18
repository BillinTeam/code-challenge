import React, { Component } from 'react';
import request from '../api/request';
import { ARTICLES_QUERY } from '../api/queries';
import { Header } from './header';
import { CardsContainer } from './cards-container';
import { Footer } from './footer';

export default class App extends Component {
  // definition
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  // lifecycle
  componentWillMount() {
    request(ARTICLES_QUERY).then(response => {
      this.setState({ articles: response.data.articles });
    });
  }

  // Renders
  render() {
    return (
      <div className="App">
        <Header />
        <CardsContainer />
        <Footer />
        <pre>{JSON.stringify(this.state.articles, null, 2)}</pre>
      </div>
    );
  }
}
