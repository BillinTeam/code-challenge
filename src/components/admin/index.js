import React, { Component } from 'react';
import Header from './Header';
import { Switch, Route, Redirect } from 'react-router-dom';

import ArticleList from '../../containers/admin/ArticleList';
import ArticleForm from '../../containers/admin/ArticleForm';

class Admin extends Component {

  render() {

    return (
      <div className="container admin">
        <Header />
        <Switch>
          <Route exact path='/admin' render={() => <Redirect to="/admin/articles" />} />
          <Route path='/admin/articles' component={ArticleList} />
          <Route path='/admin/new-article' component={ArticleForm} />
          <Route path='/admin/article/:articleId' component={ArticleForm} />
        </Switch>
      </div>
    );
  }
}

export default Admin;