import React, {Component} from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
    getBasketballRequest,
    getFootballRequest,
    getRugbyRequest,
    getValleyballRequest
} from "../../store/actions/sportActionCreators";
import './TypeButton.scss'
import PropTypes from "prop-types";
import {
    basketballSelector,
    footballSelector,
    rugbySelector,
    sportTypeSelector,
    valleyballSelector
} from "../../store/selectors/sportSelector";
import {withRouter} from "react-router";

class TypeButton extends Component {
    handleSportTypeChanging = () => {
        const {
            label,
            getFootballRequest,
            getBasketballRequest,
            getValleyballRequest,
            getRugbyRequest,
            football,
            rugby,
            basketball,
            valleyball,
            history,
            match: {params: {type}}
        } = this.props;

        if (label === 'Football') {
            getFootballRequest();
        } else if (label === 'Basketball') {
            getBasketballRequest();
        } else if (label === 'Valleyball') {
           getValleyballRequest()
        } else if (label === 'Rugby') {
            getRugbyRequest();
        }

        if (type !== label.toLowerCase()) {
            history.push(`/sports/${label.toLowerCase()}`)
        }
    };

    render() {
        const { label, currentPageSport } = this.props;
        const { pathname } = window.location;
        let className = (label.toLowerCase() === currentPageSport &&
        this.props[label.toLowerCase()].size) &&
        pathname.includes(label.toLowerCase())
            ? "touched" : '';
        return (
            <button
                className={`sport-btn ${className}`}
                onClick={this.handleSportTypeChanging}
            >
                {label}
            </button>
        );
    }
}

TypeButton.propTypes = {
    label: PropTypes.string,
    currentPageSport: PropTypes.string,
    getFootballRequest: PropTypes.func,
    getBasketballRequest: PropTypes.func,
    getValleyballRequest: PropTypes.func,
    getRugbyRequest: PropTypes.func,
    football: PropTypes.object,
    rugby: PropTypes.object,
    basketball: PropTypes.object,
    valleyball: PropTypes.object,
    isLoading: PropTypes.bool,
    error: PropTypes.string,
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
