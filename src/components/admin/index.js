import React, { Component } from 'react';
import Header from './Header';
import { Switch, Route, Redirect } from 'react-router-dom';

import ArticleList from '../../containers/admin/ArticleList';

class Admin extends Component {

  render() {

    return (
      <div className="container admin">
        <Header />
        <Switch>
          <Route exact path='/admin' render={() => <Redirect to="/admin/articles" />} />
          <Route path='/admin/articles' component={ArticleList} />
        </Switch>
      </div>
    );
  }
}

export default Admin;