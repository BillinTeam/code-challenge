import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserPanel from '../../containers/UserPanel';
import LoadingIndicator from '../../containers/LoadingIndicator';
class Header extends Component {
    render() {
        return (
            <nav className="topbar navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <a className="navbar-brand" href="#">CHALLENGE</a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item" >
                                <Link to="/" className="nav-link" href="#">Articles</Link>
                            </li>
                        </ul>

                        <UserPanel admin={false} />

                    </div>
                </div>
                
            </nav>
        );
    }
}

export default Header;