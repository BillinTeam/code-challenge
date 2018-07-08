import React, { Component } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
//import { ConnectedRouter } from 'connected-react-router';
import ServerMsg from '../containers/ServerMsg';
import Admin from './admin';
import App from './app';

class Main extends Component {

    render() {
        return (
            <Router history={this.props.history}>
                <div>
                    <ServerMsg />
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