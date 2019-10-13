import React from 'react';
import styled from "styled-components";
import {connect} from "react-redux";
import {errorSelector} from "../../store/selectors";
import {bindActionCreators} from "redux";
import {clearErrors} from "../../store/actions/sportActionCreators";

function Error({clearErrors, error}) {
    if (error) clearErrors();

    return (
        <div>
            <DivWithErrorHandling>
                <h3>Oops! Something went wrong...</h3>
                <p>{error.message}</p>
            </DivWithErrorHandling>
        </div>
    );
}

const DivWithErrorHandling = styled.div`
    background-color: #f06d06;
    color: white;
    padding: 0.2em;
    text-align: center;
`;

Error.propTypes = {};

export default connect(
    state => ({error: errorSelector(state)}),
    dispatch => bindActionCreators({clearErrors}, dispatch)
    )(Error);
