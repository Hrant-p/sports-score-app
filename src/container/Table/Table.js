import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useHistory, useLocation, useParams } from 'react-router';
import PropTypes from 'prop-types';
import { uid } from 'react-uid';
import Tab from '../../components/Tab/Tab';
import AllSportTabs from '../../components/AllSportTabs/AllSportTabs';
import {
  basketballSelector,
  errorSelector,
  footballSelector,
  isLoadingSelector,
  rugbySelector,
  sportTypeSelector,
  valleyballSelector,
} from '../../store/selectors/sportSelector';
import {
  getBasketballRequest,
  getFootballRequest,
  getRugbyRequest,
  getValleyballRequest,
} from '../../store/actions/sportActionCreators';
import { countryId } from '../../API/apiFootball';
import { filterListByCountry } from '../../helpers';
import './Table.scss';

const Table = props => {
  const {
    currentPageSport,
    getFootballRequest,
    getBasketballRequest,
    getValleyballRequest,
    getRugbyRequest,
    rugby,
    basketball,
    valleyball,
    error,
  } = props;
  const history = useHistory();
  const { type } = useParams();
  const { pathname } = useLocation();
  const selectedState = props[currentPageSport];

  useEffect(() => {

    if (type === 'football') {
      getFootballRequest();
      history.push(`/sports/${type}`);
    } else if (type === 'basketball' && !basketball.size && currentPageSport !== 'basketball') {
      getBasketballRequest();
    } else if (type === 'valleyball' && !valleyball.size && currentPageSport !== 'valleyball') {
      getValleyballRequest();
    } else if (type === 'rugby' && !rugby.size && currentPageSport !== 'rugby') {
      getRugbyRequest();
    }
      history.push(`/sports/${type}`);
  }, [
    currentPageSport,
    getFootballRequest,
    getBasketballRequest,
    getValleyballRequest,
    getRugbyRequest,
    rugby,
    basketball,
    valleyball,
    history,
    type,
    pathname,
  ]);

  return (
    <div className="table-container">
      <AllSportTabs />
      <div className="tbody">
        {Object
          .keys(countryId)
          .map(country => (
            <Tab
              key={uid(country)}
              label={country}
              data={selectedState ? filterListByCountry(selectedState, country) : []}
              error={error}
            />
          ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  currentPageSport: sportTypeSelector(state),
  football: footballSelector(state),
  basketball: basketballSelector(state),
  rugby: rugbySelector(state),
  valleyball: valleyballSelector(state),
  isLoading: isLoadingSelector(state),
  error: errorSelector(state),
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    getFootballRequest,
    getBasketballRequest,
    getValleyballRequest,
    getRugbyRequest,
  },
  dispatch,
);

Table.propTypes = {
  currentPageSport: PropTypes.string,
  getFootballRequest: PropTypes.func,
  getBasketballRequest: PropTypes.func,
  getValleyballRequest: PropTypes.func,
  getRugbyRequest: PropTypes.func,
  rugby: PropTypes.object,
  basketball: PropTypes.object,
  valleyball: PropTypes.object,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
};

export default connect(
  mapStateToProps, mapDispatchToProps,
)(Table);
