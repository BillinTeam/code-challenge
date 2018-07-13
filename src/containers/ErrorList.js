import React, { Component } from 'react';
import { Alert } from 'reactstrap';
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux";

class ErrorList extends Component {

    state = { showLoading: false }


    renderErrorList(){
        return this.props.server.errors.map((e, index)=>{
            return <li key={index}>{e.message}</li>;
        });
    }
    render() {

        if (!this.props.server.errors)
            return null;

        return (
            <Alert color="danger">
                <ul className="list list-unstyled">
                {this.renderErrorList()}
                </ul>
            </Alert>
        );


    }
}


const mapStateToProps = state => {
    return {
        server: state.server
    };
};

export default withRouter(connect(mapStateToProps)(ErrorList))



