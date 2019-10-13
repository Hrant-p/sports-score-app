import React, {Component} from 'react';
import Tab from "../../components/Tab/Tab";
import AllSportTabs from "../../components/AllSportTabs/AllSportTabs";
import {connect} from "react-redux";
import {
    basketballSelector,
    errorSelector, footballSelector,
    isLoadingSelector, rugbySelector,
    sportTypeSelector, valleyballSelector
} from "../../store/selectors";
import './Table.scss'
import {bindActionCreators} from "redux";
import {getFootballRequest} from "../../store/actions/sportActionCreators";
import {withRouter} from "react-router";
import {countryId} from "../../API/apiFootball";
import {filterListByCountry} from "../../API/helpers";
import Spinner from "../../components/Spinner";

class Table extends Component {

    drawTableBody = (sportMap) => {
        const countryNames = Object.keys(countryId);
        return countryNames.map(country => <Tab
            label={country}
            data={filterListByCountry(sportMap, country)}
            key={countryId[country]}
        />);
    };

    componentDidMount() {
        const {pathname} = window.location;
        const {
            football,
            basketball,
            valleyball,
            rugby,
            getFootballRequestActionCreator,
            history
        } = this.props;
        if (pathname.includes('sports') &&
            !football.size &&
            !basketball.size &&
            !valleyball.size &&
            !rugby.size) {
            getFootballRequestActionCreator(history)
        }
    }


    render() {
        const {  isLoading, currentPageSport } = this.props;
        const selectedState = this.props[currentPageSport];
        return (
            <div className="table-container">
                <AllSportTabs />
                {isLoading && <Spinner/>}
                <table>
                    <tbody>
                    {this.drawTableBody(selectedState)}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    currentPageSport: sportTypeSelector(state),
    football: footballSelector(state),
    basketball: basketballSelector(state),
    rugby: rugbySelector(state),
    valleyball: valleyballSelector(state),
    isLoading: isLoadingSelector(state),
    error: errorSelector(state)
});

const mapDispatchToProps = dispatch => bindActionCreators(
    { getFootballRequestActionCreator: getFootballRequest },
    dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Table));

