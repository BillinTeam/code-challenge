import React, { Component } from 'react';

import { withRouter } from 'react-router-dom'
import { connect } from "react-redux";
import { Button, Modal, ModalBody, ModalHeader, ModalFooter, Label, FormGroup, Input, ButtonDropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';
import { doLogin, doLogout } from '../actions/auth.actions';


class UserPanel extends Component {

    state = {
        modal: false,
        dropdownOpen: false,
        credentials: {
            email: '',
            password: ''
        }
    };
    toggleDropdown() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
    toggle() {
        this.setState({
            modal: !this.state.modal,
            credentials: {
                email: '',
                password: ''
            }
        });
    }

    setField(evt) {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [evt.target.name]: evt.target.value
            }
        });
    }

    login(evt) {
        evt.preventDefault();
        this.props.login(this.state.credentials);
    }
    goAdmin(){
        this.props.history.push('/admin');
    }
    logout(){
        this.props.logout();
    }
    componentWillReceiveProps(newProps) {
        if (newProps.auth) {
            this.setState({ modal: false })
        }
    }
    render() {
        return (
            <ul className="navbar-nav ml-auto">
                {this.props.auth && (
                    <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown.bind(this)}>
                        <DropdownToggle color="light"  caret>Welcome {this.props.auth.alias}</DropdownToggle>
                        <DropdownMenu>
                        { !this.props.admin && <DropdownItem onClick={()=>this.props.history.push('/admin')}>Administration</DropdownItem>}
                        { this.props.admin && <DropdownItem onClick={()=>this.props.history.push('/')}>Go back to app</DropdownItem>}
                            <DropdownItem onClick={this.logout.bind(this)}>Logout</DropdownItem>
                        </DropdownMenu>
                    </ButtonDropdown>
                )}
                {!this.props.auth &&
                    <li className="nav-item" >
                        <Button color="light" onClick={this.toggle.bind(this)}>Login</Button>
                    </li>}
                {!this.props.auth &&
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
                }
            </ul>
        );
    }
}


const mapStateToProps = state => {
    return {
        server: state.server,
        auth: state.auth
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    login: (credentials) => dispatch(doLogin(credentials)),
    logout: () => dispatch(doLogout()),

})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserPanel))



