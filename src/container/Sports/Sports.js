import React, {Component, Fragment} from 'react';
import Table from "../Table/Table";
import {connect} from "react-redux";
import {errorSelector, isLoadingSelector} from "../../store/selectors";
import Spinner from "../../components/Spinner";
import Error from "../Error";
import './Sports.scss';
import {withRouter} from "react-router";

class Sports extends Component {
    render() {
        const { error } = this.props;
        return (
            <Fragment>
                <div className="sports-container">
                    <Table/>
                </div>
                {error && <Error />}
            </Fragment>
        );
    }
}

const mapStateToPops = state => ({
    isLoading: isLoadingSelector(state),
    error: errorSelector(state)
});

export default connect(mapStateToPops, null)(withRouter(Sports));

