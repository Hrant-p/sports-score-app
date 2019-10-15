import React, {Fragment} from 'react';
import Table from "../Table/Table";
import {connect} from "react-redux";
import {errorSelector, isLoadingSelector} from "../../store/selectors/sportSelector";
import Spinner from "../../components/Spinner/Spinner";
import Error from "../Error/Error";
import {withRouter} from "react-router";
import './Sports.scss';

function Sports(props) {
    const {error, isLoading} = props;
    return (
        <Fragment>
            {error && <Error/>}
            {isLoading && <Spinner/>}
            <div className="sports-container">
                <Table/>
            </div>
        </Fragment>
    );
}

const mapStateToPops = state => ({
    isLoading: isLoadingSelector(state),
    error: errorSelector(state)
});

export default connect(mapStateToPops, null)(withRouter(Sports));
