import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Header extends Component {
    render() {
        return (
            <nav className="topbar navbar navbar-expand-lg navbar-dark bg-dark">

                <a className="navbar-brand" href="#">ADMIN</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item" >
                            <Link to="/admin/articles" className="nav-link" href="#">Articles</Link>
                        </li>                        
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;