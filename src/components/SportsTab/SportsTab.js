import React, {Component} from 'react';
import './Sportstab.scss';
import { Link } from "react-router-dom";

class SportsTab extends Component {
    render() {
        return (
            <div className="sports-tab">
                <ul>
                    <li>
                        <Link to="/sports/football">
                            Football
                        </Link>
                    </li>
                    <li>
                        <Link to="/sports/basketball">
                            Basketball
                        </Link>
                    </li>
                    <li>
                        <Link to="/sports/tennis">
                            Tennis
                        </Link>
                    </li>
                    <li>
                        <Link to="/sports/rugby">
                            Rugby
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default SportsTab;