import React, {Component} from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
    getBasketballRequest,
    getFootballRequest, getRugbyRequest, getValleyballRequest
} from "../../store/actions/sportActionCreators";
import './TypeButton.scss'
import * as PropTypes from "prop-types";
import {sportTypeSelector} from "../../store/selectors";
import {withRouter} from "react-router";

class TypeButton extends Component {

    handleSportTypeChanging = () => {
        const {
            label,
            getFootballRequest,
            getBasketballRequest,
            getValleyballRequest,
            getRugbyRequest,
            history
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
        let { label, currentPageSport } = this.props;
        let className = label.toLowerCase() === currentPageSport.toLowerCase() &&
        window.location.pathname.includes(label.toLowerCase())
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
    currentPageSport: PropTypes.string
};

const mapStateToProps = state => ({
    currentPageSport: sportTypeSelector(state)
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

