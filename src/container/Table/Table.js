import React, {Component} from 'react';
import Tab from "../../components/Tab/Tab";
import AllSportTabs from "../../components/AllSportTabs/AllSportTabs";
import {connect} from "react-redux";
import {
    basketballSelector,
    errorSelector,
    footballSelector,
    isLoadingSelector,
    rugbySelector,
    sportTypeSelector,
    valleyballSelector
} from "../../store/selectors/sportSelector";
import {bindActionCreators} from "redux";
import {
    getBasketballRequest,
    getFootballRequest,
    getRugbyRequest,
    getValleyballRequest
} from "../../store/actions/sportActionCreators";
import {withRouter} from "react-router";
import {countryId} from "../../API/apiFootball";
import {filterListByCountry} from "../../helpers";
import PropTypes from 'prop-types';
import './Table.scss'
import {uid} from "react-uid";

class Table extends Component {
    componentDidMount() {
        const {
            currentPageSport,
            getFootballRequest,
            getBasketballRequest,
            getValleyballRequest,
            getRugbyRequest,
            rugby,
            basketball,
            valleyball,
            history,
            match : { params: {type}}
        } = this.props;

        if (window.location.pathname.includes('/sports/') && !type) {
            history.push('/sports/football')
        }

        if (type === 'football') {
            getFootballRequest([]);
        } else if (type === 'basketball' && !basketball.size && currentPageSport !== 'basketball') {
            getBasketballRequest([]);
        } else if (type === 'valleyball' && !valleyball.size && currentPageSport !== 'valleyball') {
            getValleyballRequest([])
        } else if (type === 'rugby' && !rugby.size && currentPageSport !== 'rugby') {
            getRugbyRequest([]);
        }

    };

    drawTableBody = sportMap => {
        const countryNames = Object.keys(countryId);
        return countryNames.map(country => <Tab
            key={uid(country)}
            label={country}
            data={sportMap ? filterListByCountry(sportMap, country) : []}
            error={this.props.error}
        />);
    };

    render() {
        const { currentPageSport, error } = this.props;
        const selectedState = this.props[currentPageSport];
        return (
            <div className="table-container">
                <AllSportTabs/>
                {!error &&
                <div className="tbody">
                    {this.drawTableBody(selectedState)}
                </div>}
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
    {
        getFootballRequest,
        getBasketballRequest,
        getValleyballRequest,
        getRugbyRequest
    },
    dispatch
);

Table.propTypes = {
    currentPageSport: PropTypes.string,
    getFootballRequest: PropTypes.func,
    getBasketballRequest: PropTypes.func,
    getValleyballRequest: PropTypes.func,
    getRugbyRequest: PropTypes.func,
    rugby: PropTypes.object,
    basketball: PropTypes.object,
    valleyball: PropTypes.object,
    isLoading: PropTypes.bool,
    error: PropTypes.string,
};

export default connect(
    mapStateToProps, mapDispatchToProps
)(withRouter(Table));
