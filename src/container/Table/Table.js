import React, {Component} from 'react';
import './Table.scss'
import Tab from "../../components/Tab/Tab";
import SportsTab from "../../components/SportsTab/SportsTab";

class Table extends Component {
    render() {
        return (
            <div className="table-container">
                <SportsTab/>
                <table>
                    <tbody>

                        <Tab label="USA" />
                        <Tab label="China" />
                        <Tab label="Russia" />
                        <Tab label="USA" />
                        <Tab label="Spain"/>
                        <Tab label="France"/>
                        <Tab label="Portugal"/>
                        <Tab label="Brasil"/>
                        <Tab label="Canada"/>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;

