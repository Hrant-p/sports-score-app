import React, { Component } from 'react';
import './Card.scss';

class Card extends Component {
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
        return (
            <div className='dropdown-menu'>
                <button
                    className={`btn btn-8 btn-8g ${showMenu ? 'btn-success3d' : ''}`}
                    onClick={this.showMenu}>
                    dropdown-btn
                </button>

                {showMenu ? (
                            <div
                                className="menu"
                                ref={(element) => {
                                    this.dropdownMenu = element;
                                }}
                            >
                                <button className=''> Home </button>
                                <button> Sports </button>
                                <button> Profile </button>
                                <button> About </button>
                            </div>
                        ) : null
                }
            </div>
        );
    }
}

export default Card
