import React from 'react';
import {Link} from "react-router-dom";
import './Navbar.scss';

// import Card from "./Card";
// const = [{name: 'path'}].map

function Navbar() {
    return (
        <nav>
            {/*<Card />*/}
            <ul>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/sports">
                        Sports
                    </Link>
                </li>
                <li>
                    <Link to="/profile">
                        Profile
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;