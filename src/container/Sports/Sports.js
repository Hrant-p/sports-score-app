import React, {Fragment} from 'react';
import Table from "../Table/Table";
import {connect} from "react-redux";
import {errorSelector, isLoadingSelector} from "../../store/selectors/sportSelector";
import Spinner from "../../components/Spinner/Spinner";
import Error from "../Error/Error";
import './Sports.scss';
import {withRouter} from "react-router";

function Sports(props) {
    const {error, isLoading} = props;
    return (
        <Fragment>
            {isLoading && <Spinner/>}
            {error && <Error/>}
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

