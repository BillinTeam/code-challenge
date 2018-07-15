import React, { Component } from 'react';
import Header from './misc/Header';
import { Switch, Route } from 'react-router-dom';

import ArticleListCont from './article-list';
import ArticleCont from './article';

class App extends Component {

  render() {
    return (
      <div className="app">
        <Header />
        <Switch>
          <Route exact path='/' component={ArticleListCont} />
          <Route path='/read/:articleId' component={ArticleCont} />
        </Switch>
      </div>
    );
  }
}

export default App;