import React, {Component} from 'react';
import Tab from "../../components/Tab/Tab";
import SportsTab from "../../components/SportsTab/SportsTab";
import {connect} from "react-redux";
import {
    errorSelector,
    infoByCountrySelector,
    isLoadingSelector
} from "../../store/selectors";
import './Table.scss'

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

const mapStateToProps = state => ({
    infoByCountries: infoByCountrySelector(state),
    isLoading: isLoadingSelector(state),
    error: errorSelector(state)
});

export default connect(mapStateToProps, {})(Table);

