import {all, call, put, takeLatest} from 'redux-saga/effects';
import {
    changeSportType,
    setErrorsState,
    setLoadingState,
    sportRequestSucceed,
} from "../store/actions/sportActionCreators";
import { sportActionTypes} from "../store/actions/actionTypes";
import {request} from "../services/requestService";
import {constructUrl} from "../API/helpers";
import {countryId, footballApi} from "../API/apiFootball";
import {leaveUnnecessaryData} from "./sagaHelpers";
import {jsonData} from "../API/sportData";

function* multipleCountryRequest(country) {
    try {
        const {data} = yield call(
            request,
            'GET',
            constructUrl(
                [footballApi.url],
                {
                    action: 'get_events',
                    country_id: countryId[country],
                    APIkey: footballApi.key,
                    from: '2019-09-02',
                    to: '2019-09-05'
                }));
        const slicedData = yield data.slice(0, 4);
        const matchInfo = yield leaveUnnecessaryData(slicedData);
        return yield {
            [country]: matchInfo
        }
    } catch (e) {
        yield put(setLoadingState(false));
        yield put(setErrorsState(e));
    }
}

function* footballRequest({payload: {history}}) {

    try {
        let necessaryData = yield [];

        yield put(setLoadingState(true));
        const [rus, rom] = yield all([
            call(multipleCountryRequest, 'Russia'),
            call(multipleCountryRequest, 'Romania'),
        ]);
        necessaryData = yield Array.prototype.concat(rus, rom);
        yield put(sportRequestSucceed('football', necessaryData));
        yield history.push('/sports/football');
        yield put(changeSportType('football'));

        const [den, pol, it] = yield all([
            call(multipleCountryRequest, 'Denmark'),
            call(multipleCountryRequest, 'Poland'),
            call(multipleCountryRequest, 'Italy'),
        ]);

        necessaryData = yield Array.prototype.concat(necessaryData, den, pol, it);
        yield put(sportRequestSucceed('football', necessaryData));

        const [ger, norw, aus] = yield all([
            call(multipleCountryRequest, 'Germany'),
            call(multipleCountryRequest, 'Norway'),
            call(multipleCountryRequest, 'Austria')
        ]);
        necessaryData = yield Array.prototype.concat(necessaryData, aus, ger, norw);
        yield put(sportRequestSucceed('football', necessaryData));
        yield put(setLoadingState(false));
    } catch (e) {
        yield setLoadingState(false);
        yield put(setErrorsState(e));
    }
}

function* valleyballRequest({payload: {history}}) {
    yield requestByType('valleyball');
    yield history.push('/sports/valleyball');
}

function* basketballRequest({payload: {history}}) {
    yield requestByType('basketball');
    yield history.push('/sports/basketball');
}

function* rugbyRequest({payload: {history}}) {
    yield requestByType('rugby');
    yield history.push('/sports/rugby');
}

function* requestByType(sportType) {
    try {
        yield put(setLoadingState(true));
        const countryArr = yield Object.keys(countryId);
        const matchData = countryArr.map((item, index) => {
            const slicedData = jsonData[sportType].slice(index + 40, index + 44);// 10 hat
            const matchInfo = leaveUnnecessaryData(slicedData);
            return ({
                [item]: matchInfo
            });
        });
        yield put(sportRequestSucceed(sportType, matchData));
        yield put(changeSportType(`${sportType}`));
        yield put(setLoadingState(false));
    } catch (e) {
        yield put(setLoadingState(false));
        yield put(setErrorsState(e));
    }
}

export function* sportSaga() {
    yield all([
        takeLatest(sportActionTypes.GET_FOOTBALL_REQUEST, footballRequest),
        takeLatest(sportActionTypes.GET_BASKETBALL_REQUEST, basketballRequest),
        takeLatest(sportActionTypes.GET_VALLEYBALL_REQUEST, valleyballRequest),
        takeLatest(sportActionTypes.GET_RUGBY_REQUEST, rugbyRequest)
    ])
} 

