import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Table from '../Table/Table';
import { errorSelector, isLoadingSelector } from '../../store/selectors/sportSelector';
import Spinner from '../../components/Spinner/Spinner';
import Error from '../Error/Error';
import './Sports.scss';

const Sports = ({ error, isLoading }) => (
  <Fragment>
    {error && <Error />}
    {isLoading && <Spinner />}
    <div className="sports-container">
      <Table />
    </div>
  </Fragment>
);

const mapStateToPops = state => ({
  isLoading: isLoadingSelector(state),
  error: errorSelector(state),
});

Sports.propTypes = {
  isLoading: PropTypes.bool,
  error: PropTypes.string,
};

export default connect(mapStateToPops, null)(Sports);
