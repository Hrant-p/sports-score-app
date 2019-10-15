import React, { Component } from 'react';
import './Header.scss';
import logo from '../../img/jackpot.svg'

class Header extends Component {
    render() {
        return (
            <header className="general-header">
                <div>
                    <img src={logo} alt="" className="src"/>
                </div>
                <div>
                    <h3>Bet Town</h3>
                    <p>The best choice for you!</p>

                </div>
            </header>
        );
    }
}

export default Header
