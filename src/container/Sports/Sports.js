import React, {Component} from 'react';
import './Sports.scss'
import Table from "../Table/Table";
import {connect} from "react-redux";
import {errorSelector, isLoadingSelector} from "../../store/selectors";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";

class Sports extends Component {
    render() {
        const { isLoading, error } = this.props;
        return (
            <div className="sports-container">
                {error && <Error error={error} />}
                {isLoading && <Spinner />}
                <Table />
            </div>
        );
    }
};

const mapStateToPops = state => ({
    isLoading: isLoadingSelector(state),
    error: errorSelector(state)
});

export default connect(mapStateToPops, null)(Sports);

