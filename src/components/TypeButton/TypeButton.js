import React, {Component} from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
    getBasketballRequest,
    getFootballRequest, getRugbyRequest, getValleyballRequest
} from "../../store/actions/sportActionCreators";
import './TypeButton.scss'
import * as PropTypes from "prop-types";
import {
    basketballSelector,
    footballSelector,
    rugbySelector,
    sportTypeSelector,
    valleyballSelector
} from "../../store/selectors";
import {withRouter} from "react-router";

class TypeButton extends Component {

    handleSportTypeChanging = history => {
        const {
            label,
            getFootballRequest,
            getBasketballRequest,
            getValleyballRequest,
            getRugbyRequest,
        } = this.props;

        if (label === 'Football') {
            getFootballRequest(history);
        } else if (label === 'Basketball') {
            getBasketballRequest(history);
        } else if (label === 'Valleyball') {
           getValleyballRequest(history)
        } else if (label === 'Rugby') {
            getRugbyRequest(history);
        }
    };

    render() {
        let { label, currentPageSport, history } = this.props;
        const { pathname } = window.location;
        let className = (label.toLowerCase() === currentPageSport &&
        this.props[label.toLowerCase()].size ) || pathname.includes(label.toLowerCase())
            ? "touched" : '';
        return (
            <button
                className={`sport-btn ${className}`}
                onClick={() => this.handleSportTypeChanging(history)}
            >
                {label}
            </button>
        );
    }
}

TypeButton.propTypes = {
    label: PropTypes.string,
    currentPageSport: PropTypes.string
};

const mapStateToProps = state => ({
    currentPageSport: sportTypeSelector(state),
    football: footballSelector(state),
    basketball: basketballSelector(state),
    valleyball: valleyballSelector(state),
    rugby: rugbySelector(state)
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(TypeButton))

