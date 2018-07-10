import React, { Component } from 'react';

import { withRouter, Link } from 'react-router-dom'
import { connect } from "react-redux";
import { Button, Modal, ModalBody, ModalHeader, ModalFooter, Label, FormGroup, Input } from 'reactstrap';
import { doLogin } from '../actions/auth.actions';
class UserPanel extends Component {

    state = {
        modal: false,
        data: {
            email: '',
            password: ''
        }
    };

    toggle() {
        this.setState({
            modal: !this.state.modal,
            data: {
                email: '',
                password: ''
            }
        });
    }

    setField(evt) {
        this.setState({
            data: {
                ...this.state.data,
                [evt.target.name]: evt.target.value
            }
        });
    }

    login(evt) {
        evt.preventDefault();
        console.log(this.state.data);
    }
    componentDidMount() {

    }
    render() {
        return (
            <ul className="navbar-nav ml-auto">
                {/*<li className="nav-item" >
                    <Link to="/admin" className="nav-link" href="#">Admin</Link>
        </li> */}
                <li className="nav-item" >
                    <Button color="light" onClick={this.toggle.bind(this)}>Login</Button>
                </li>

                <Modal isOpen={this.state.modal} toggle={this.toggle.bind(this)}>
                    <form onSubmit={this.login.bind(this)}>
                        <ModalHeader toggle={this.toggle}>Login</ModalHeader>
                        <ModalBody>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input required value={this.state.email} onChange={this.setField.bind(this)} type="email" name="email" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input required value={this.state.password} onChange={this.setField.bind(this)} type="password" name="password" />
                            </FormGroup>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="secondary" onClick={this.toggle.bind(this)}>Cancel</Button>
                            <Button color="primary" type="submit">Login</Button>{' '}
                        </ModalFooter>
                    </form>
                </Modal>

            </ul>
        );
    }
}


const mapStateToProps = state => {
    return {
        server: state.server
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    login: (loginData) => dispatch(doLogin(loginData)),

})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserPanel))



