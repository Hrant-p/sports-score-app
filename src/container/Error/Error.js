import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { errorSelector } from '../../store/selectors/sportSelector';

function Error({ error }) {
  return (
    <div>
      <DivWithErrorHandling>
        <h3>Oops! Something went wrong...</h3>
        <p>{error}</p>
        <button
          type="button"
          className="sport-btn"
          onClick={() => window.location.reload()}
        >
                    Please Refresh Page
        </button>
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
  error: PropTypes.string,
};

export default connect(
  (state) => ({ error: errorSelector(state) }),
  null,
)(Error);
