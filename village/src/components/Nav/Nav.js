import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = props => {
    return (
        <div>
            <Link to="/smurfs" >Home</Link>
            <Link to="/form" >Form</Link>
        </div>
    )
}


export default NavBar;