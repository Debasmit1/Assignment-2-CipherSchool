import React from 'react';
import './Display.css'

const Navbar = (props) => {

    return(
        <nav>
            <h1 className="head">{props.heading}</h1>
        </nav>
    )
}

export default Navbar;