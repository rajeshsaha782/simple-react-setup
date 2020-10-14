import React from 'react';
import './Nav.css';
import {NavLink} from "react-router-dom";

function Nav() {
    return (
        <nav  className="navbar navbar-dark bg-dark">
            <NavLink to='/' exact activeClassName="active">
                <h3>logo</h3>
            </NavLink>
            <ul className="nav-links">
                    <NavLink to='/about' activeClassName="is-active">
                        <li>About</li>
                    </NavLink>
                    <NavLink to='/shop' activeClassName="is-active">
                        <li>Shop</li>
                    </NavLink>
            </ul>
        </nav>
    );
}

export default Nav;
