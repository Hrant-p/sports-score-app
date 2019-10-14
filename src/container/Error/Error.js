import React from 'react';
import styled from "styled-components";
import {connect} from "react-redux";
import {errorSelector} from "../../store/selectors/sportSelector";
import {bindActionCreators} from "redux";
import PropTypes from 'prop-types';


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

Error.propTypes = {
    error: PropTypes.object,
    clearErrors: PropTypes.func
};

export default connect(
    state => ({error: errorSelector(state)}), null)(Error);
