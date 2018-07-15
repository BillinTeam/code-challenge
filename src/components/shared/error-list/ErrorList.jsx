import React, { Component } from 'react';
import { Alert } from 'reactstrap';

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

export default ErrorList;



