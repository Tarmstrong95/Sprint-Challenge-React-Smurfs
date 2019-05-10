import React from 'react';
import { NavLink } from 'react-router-dom'
import './nav.css'

const NavBar = () => {
    return (
        <div>
            <NavLink className="nav-item" activeClassName="active" to="/smurfs" >Home</NavLink>{' '}
            <NavLink className="nav-item" activeClassName="active" to="/form" >Form</NavLink>
        </div>
    )
}


export default NavBar;