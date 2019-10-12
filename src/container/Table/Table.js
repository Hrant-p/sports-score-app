import React, {Component} from 'react';
import './Table.scss'
import Tab from "../../components/Tab/Tab";
import SportsTab from "../../components/SportsTab/SportsTab";

class Table extends Component {
    render() {
        return (
            <div className="table-container">
                <SportsTab />
                <table>
                    <tbody>

                        <Tab label="Russia" />
                        <Tab label="England"/>
                        <Tab label="Denmark"/>
                        <Tab label="Austria" />
                        <Tab label="Iceland" />
                        <Tab label="Norway"/>
                        <Tab label="Poland"/>
                        <Tab label="Germany"/>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;

