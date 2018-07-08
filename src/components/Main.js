import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import ServerMsg from '../containers/ServerMsg';
import Admin from './admin';
import App from './app';

class Main extends Component {

    render() {
        return (
            <ConnectedRouter history={this.props.history}>
                <div>
                    <ServerMsg />
                    <Switch>
                        <Route exact path='/admin' component={Admin} />
                        <Route path='/' component={App} />
                    </Switch>
                </div>
            </ConnectedRouter>
        );
    }
}

export default Main;