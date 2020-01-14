import {
  all, call, put, takeLatest,
} from 'redux-saga/effects';
import {
  changeSportType,
  setErrorsState,
  setLoadingState,
  sportRequestSucceed,
} from '../store/actions/sportActionCreators';
import { sportActionTypes } from '../store/actions/actionTypes';
import request from '../services/requestService';
import { constructUrl } from '../helpers';
import { countryId, footballApi } from '../API/apiFootball';
import { leaveUnnecessaryData } from './sagaHelpers';
import { jsonData } from '../API/sportData';

function* multipleCountryRequest(country) {
  try {
    const { data } = yield call(
      request,
      'GET',
      constructUrl(
        [footballApi.url],
        {
          action: 'get_events',
          country_id: countryId[country],
          APIkey: footballApi.key,
          from: '2019-11-28',
          to: '2019-12-05',
        },
      ),
    );
    const slicedData = yield data.slice(0, 6);
    const matchInfo = yield leaveUnnecessaryData(slicedData);
    return { [country]: matchInfo };
  } catch (e) {
    yield put(setLoadingState(false));
    yield put(setErrorsState(e.message));
  }
}


function* requestByType(sportType) {
  try {
    yield put(setLoadingState(true));
    const countryArr = yield Object.keys(countryId);
    const matchData = countryArr.map((item, index) => {
      const slicedData = jsonData[sportType].slice(index + 10, index + 16);
      const matchInfo = leaveUnnecessaryData(slicedData);
      return { [item]: matchInfo };
    });
    yield put(sportRequestSucceed(sportType, matchData));
    yield put(changeSportType(`${sportType}`));
    yield put(setLoadingState(false));
  } catch (e) {
    yield put(setLoadingState(false));
    yield put(setErrorsState(e.message));
  }
}

function* footballRequest() {
  try {
    let necessaryData;
    yield put(setLoadingState(true));
    const [eng, rom] = yield all([
      call(multipleCountryRequest, 'England'),
      call(multipleCountryRequest, 'Romania'),
    ]);
    necessaryData = yield Array.prototype.concat(eng, rom);
    yield put(sportRequestSucceed('football', necessaryData));
    yield put(changeSportType('football'));

    const [den, fr, it] = yield all([
      call(multipleCountryRequest, 'Denmark'),
      call(multipleCountryRequest, 'France'),
      call(multipleCountryRequest, 'Italy'),
    ]);

    necessaryData = yield necessaryData.concat(den, fr, it);
    yield put(sportRequestSucceed('football', necessaryData));

    const [ger, norw, aus] = yield all([
      call(multipleCountryRequest, 'Germany'),
      call(multipleCountryRequest, 'Norway'),
      call(multipleCountryRequest, 'Austria'),
    ]);
    necessaryData = yield necessaryData.concat(aus, ger, norw);
    yield put(sportRequestSucceed('football', necessaryData));
    yield put(setLoadingState(false));
  } catch (e) {
    yield setLoadingState(false);
    yield put(setErrorsState(e.message));
  }
}

function* valleyballRequest() {
  yield requestByType('valleyball');
}

function* basketballRequest() {
  yield requestByType('basketball');
}

function* rugbyRequest() {
  yield requestByType('rugby');
}

export default function* sportSaga() {
  yield all([
    takeLatest(sportActionTypes.GET_FOOTBALL_REQUEST, footballRequest),
    takeLatest(sportActionTypes.GET_BASKETBALL_REQUEST, basketballRequest),
    takeLatest(sportActionTypes.GET_VALLEYBALL_REQUEST, valleyballRequest),
    takeLatest(sportActionTypes.GET_RUGBY_REQUEST, rugbyRequest),
  ]);
}
