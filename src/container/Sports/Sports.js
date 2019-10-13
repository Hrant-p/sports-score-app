import React, {Component, Fragment} from 'react';
import Table from "../Table/Table";
import {connect} from "react-redux";
import {errorSelector, isLoadingSelector} from "../../store/selectors";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import './Sports.scss';

class Sports extends Component {
    render() {
        const { isLoading, error } = this.props;
        return (
            <Fragment>
                <div className="sports-container">
                    <Table/>
                </div>
                {error && <Error />}
                {isLoading && <Spinner/>}
            </Fragment>
        );
    }
}

const mapStateToPops = state => ({
    isLoading: isLoadingSelector(state),
    error: errorSelector(state)
});

export default connect(mapStateToPops, null)(Sports);

