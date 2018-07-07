import React, { Component } from 'react';

import { withRouter } from 'react-router-dom'
import { connect } from "react-redux";

class ServerMsg extends Component {

    render() {
        if (this.props.server.error)
            return <div className="alert alert-danger">Error...<br />{this.props.server.message}</div>

        else if (this.props.server.fetching)
            return <div className="alert alert-info">Loading...</div>

        return null;
    }
}


const mapStateToProps = state => {
    return {
        server: state.server
    };
};

export default withRouter(connect(mapStateToProps)(ServerMsg))



