import React, { Component } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import Admin from './admin';
import App from './app';
import LoadingIndicator from '../containers/LoadingIndicator';

class Main extends Component {

    render() {
        return (
            <Router history={this.props.history}>
                <div>
                    <LoadingIndicator />
                    <Switch>
                        <Route path='/admin' component={Admin} />
                        <Route path='/' component={App} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Main;