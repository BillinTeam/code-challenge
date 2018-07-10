import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserPanel from '../../containers/UserPanel';
class Header extends Component {
    render() {
        return (
            <nav className="topbar navbar navbar-expand-lg navbar-dark bg-primary">

                <a className="navbar-brand" href="#">CHALLENGE</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item" >
                            <Link to="/" className="nav-link" href="#">Articles</Link>
                        </li>
                    </ul>
                    
                        <UserPanel/>

                </div>
            </nav>
        );
    }
}

export default Header;