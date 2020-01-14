import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useHistory, useLocation, useParams } from 'react-router';
import PropTypes from 'prop-types';
import {
  getBasketballRequest,
  getFootballRequest,
  getRugbyRequest,
  getValleyballRequest,
} from '../../store/actions/sportActionCreators';
import './TypeButton.scss';
import {
  sportTypeSelector,
} from '../../store/selectors/sportSelector';

const TypeButton = ({
  label,
  getFootballRequest,
  getBasketballRequest,
  getValleyballRequest,
  getRugbyRequest,
  currentPageSport,
}) => {
  const history = useHistory();
  const { type } = useParams();
  const { pathname } = useLocation();
  const labelLowerCase = label.toLowerCase();
  const className = labelLowerCase === currentPageSport
     && pathname.includes(labelLowerCase)
    ? 'touched' : '';

  const handleSportTypeChanging = () => {
    switch (label) {
      case 'Football':
        getFootballRequest();
        break;
      case 'Basketball':
        getBasketballRequest();
        break;
      case 'Valleyball':
        getValleyballRequest();
        break;
      case 'Rugby':
        getRugbyRequest();
        break;
      default:
    }

    if (type !== labelLowerCase) {
      history.push(`/sports/${labelLowerCase}`);
    }
  };

  return (
    <button
      type="button"
      className={`sport-btn ${className}`}
      onClick={handleSportTypeChanging}
    >
      {label}
    </button>
  );
};

TypeButton.propTypes = {
  label: PropTypes.string,
  currentPageSport: PropTypes.string,
  getFootballRequest: PropTypes.func,
  getBasketballRequest: PropTypes.func,
  getValleyballRequest: PropTypes.func,
  getRugbyRequest: PropTypes.func,
};

const mapStateToProps = state => ({
  currentPageSport: sportTypeSelector(state),
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TypeButton);
