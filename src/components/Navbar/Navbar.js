import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './Navbar.scss';
import DropdownMenu from "../DropdownMenu/DropdownMenu";

const menuItems = [
    {id: 0, name: 'Home', path: '/'},
    {id: 1, name: 'Sports', path: '/sports'},
    {id: 2, name: 'Profile', path: '/profile'},
    {id: 3, name: 'About', path: '/about'}
];

class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            dropdown: false
        };
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleDropdownMenu)
    }

    componentWillUnmount() {
        window.removeEventListener('resize')
    }

    handleDropdownMenu = () => {
        if (window.innerWidth < 700) {
            this.setState({dropdown: true})
        } else {
            this.setState({dropdown: false})
        }
    };

    render() {
        const {dropdown} =this.state;
        const items = (
            <ul>
                {menuItems.map(item => (
                    <li key={item.id}>
                        <Link to={item.path}>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>);

        return (
            <nav>
                {dropdown ? <DropdownMenu menuItems={menuItems}/> : items}
            </nav>
        );
    }
}

export default Navbar
