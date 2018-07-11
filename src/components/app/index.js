import React, { Component } from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';

import ArticleList from '../../containers/app/ArticleList';
import Article from '../../containers/app/Article';
class App extends Component {

  render() {
    return (
      <div className="app">
        <Header />
        <div className="container">
          <Switch>

            <Route exact path='/' component={ArticleList} />
            <Route path='/read/:articleId' component={Article} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;