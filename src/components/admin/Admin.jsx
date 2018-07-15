import React, { Component } from 'react';
import Header from './misc/Header';
import { Switch, Route, Redirect } from 'react-router-dom';

import ArticleListCont from './article-list';
import ArticleFormCont from './article-form';

class Admin extends Component {

  render() {

    return (
      <div className="admin">
        <Header />
        <div className="container">
          <Switch>
            <Route exact path='/admin' render={() => <Redirect to="/admin/articles" />} />
            <Route path='/admin/articles' component={ArticleListCont} />
            <Route path='/admin/new-article' component={ArticleFormCont} />
            <Route path='/admin/article/:articleId' component={ArticleFormCont} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Admin;