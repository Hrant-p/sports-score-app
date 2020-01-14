import {
  ERROR_STATE,
  SET_LOADING_STATE,
  SET_SPORT_TYPE,
  sportActionTypes,
} from './actionTypes';

export function setLoadingState(isLoading) {
  return {
    type: SET_LOADING_STATE,
    payload: { isLoading },
  };
}

export function setErrorsState(error) {
  return {
    type: ERROR_STATE,
    payload: { error },
  };
}

export function getFootballRequest() {
  return {
    type: sportActionTypes.GET_FOOTBALL_REQUEST,
    payload: {},
  };
}

export function getBasketballRequest() {
  return {
    type: sportActionTypes.GET_BASKETBALL_REQUEST,
    payload: {},
  };
}

export function getValleyballRequest() {
  return {
    type: sportActionTypes.GET_VALLEYBALL_REQUEST,
    payload: {},
  };
}

export function getRugbyRequest() {
  return {
    type: sportActionTypes.GET_RUGBY_REQUEST,
    payload: {},
  };
}

export function sportRequestSucceed(sportType, data) {
  return {
    type: sportActionTypes.SPORT_REQUEST_SUCCEED,
    payload: { sportType, data },
  };
}

export function changeSportType(sportType) {
  return {
    type: SET_SPORT_TYPE,
    payload: { sportType },
  };
}
