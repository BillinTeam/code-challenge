import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ArticleList from '../containers/ArticleList';
import Article from '../containers/Article';

class Main extends Component {

    render() {
        return <div>
            <Switch>
                <Route exact path='/' component={ArticleList} />
                <Route path='/:id' component={Article} />
            </Switch>
        </div>;
    }
}

export default Main;