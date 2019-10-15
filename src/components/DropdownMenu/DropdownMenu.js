import React, { Component } from 'react';
import './DropdownMenu.scss';
import {withRouter} from "react-router-dom";

class DropdownMenu extends Component {
    constructor() {
        super();
        this.state = {
            showMenu: false,
        };
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(event) {
        event.preventDefault();

        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu(event) {
        if (!this.dropdownMenu.contains(event.target)) {

            this.setState({ showMenu: false }, () => {
                document.removeEventListener('click', this.closeMenu);
            });

        }
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.closeMenu)
    }

    render() {
        const {showMenu} = this.state;
        const {menuItems, history} = this.props;
        return (
            <div className='dropdown-menu'>
                <button
                    className={`btn btn-8 btn-8g ${showMenu ? 'btn-success3d' : ''}`}
                    onClick={this.showMenu}>
                    MENU
                </button>
                {showMenu ? (
                    <div
                        className="menu"
                        ref={(element) => {
                            this.dropdownMenu = element;
                        }}
                    >
                        {menuItems.map(i => (
                            <button
                                className='sport-btn menu-btn'
                                style={{margin: '5px'}}
                                key={i.id}
                                onClick={() => history.push(i.path)}>
                                {i.name}
                            </button>)
                        )}
                    </div>
                ) : null
                }
            </div>
        );
    }
}

export default withRouter(DropdownMenu)
