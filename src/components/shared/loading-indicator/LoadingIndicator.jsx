import React, { Component } from 'react';


class LoadingIndicator extends Component {

    state = { showLoading: false }

    componentWillReceiveProps(newProps) {
        if (newProps.server.fetching) {
            this.setState({ showLoading: true })
        }
        else {
            // Add a timeout to hide so it doesn't blink on the screen on fast loads
            setTimeout(() => this.setState({ showLoading: false }), 500);
        }
    }

    componentDidMount() {
        this.setState({
            showLoading: false
        })
    }

    render() {
        const loader = <div className="api-fetching-overlay">
            <div className="api-fetching-indicator"><i className="fa fa-circle-o-notch  fa-spin"></i> Loading...</div>
        </div>;
        return this.state.showLoading && loader;
    }
}

export default LoadingIndicator;



