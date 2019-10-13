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

class Table extends Component {

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
        const countryNames = Object.keys(countryId);
        const { football } = this.props;
        const data = filterListByCountry(football, 'Russia');
        console.log(data);
        return (
            <div className="table-container">
                <AllSportTabs />
                <table>
                    <tbody>
                    {countryNames.map(country => <Tab
                        label={country}
                        data={filterListByCountry(football, country)}
                        key={countryId[country]}
                    />)
                    }
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

