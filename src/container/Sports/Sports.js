import React, {Component} from 'react';
import SportsTab from "../../components/SportsTab/SportsTab";
import './Sports.scss'
import Table from "../Table/Table";

class Sports extends Component {
    render() {
        return (
            <div className="sports-container">
                {/*<SportsTab/>*/}
                <Table />
            </div>
        );
    }
}

export default Sports;

