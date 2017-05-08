import React, { Component } from 'react';
import request from './request';
import { ARTICLES_QUERY } from './queries';

class App extends Component {
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
        <h2>Billin code challenge</h2>
        <pre>{JSON.stringify(this.state.articles, null, 2)}</pre>
      </div>
    );
  }
}

export default App;
