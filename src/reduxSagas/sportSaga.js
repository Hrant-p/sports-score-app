import {all, call, put, takeLatest, delay} from 'redux-saga/effects';
import {
    basketballRequestSucceed,
    changeSportType,
    footballRequestSucceed, rugbyRequestSucceed,
    setErrorsState,
    setLoadingState, valleyballRequestSucceed
} from "../store/actions/sportActionCreators";
import {CLEAR_ERROR_WITH_INTERVAL, sportActionTypes} from "../store/actions/actionTypes";
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
        console.log(e);
    }
}

function* footballRequest({ payload: { history }}) {
    try {
        yield put(setLoadingState(true));
        const [ rus, rom ] = yield all([
            call(multipleCountryRequest, 'Russia'),
            call(multipleCountryRequest, 'Romania'),
        ]);
        const [ den, pol, it ] = yield all([
            call(multipleCountryRequest, 'Denmark'),
            call(multipleCountryRequest, 'Poland'),
            call(multipleCountryRequest, 'Italy'),
        ]);
        const [ ger, norw, aus ] = yield all([
            call(multipleCountryRequest, 'Germany'),
            call(multipleCountryRequest, 'Norway'),
            call(multipleCountryRequest, 'Austria')
        ]);
        const necessaryData = yield Array.prototype.concat(rus, rom, aus, den, pol, it, ger, norw);
       yield history.push('/sports/football');
       yield put(footballRequestSucceed(necessaryData));
       yield put(changeSportType('football'));
       yield put(setLoadingState(false));

    } catch (e) {
       yield setLoadingState(false);
       yield put(setErrorsState(e));
       yield put(footballRequestSucceed([]));
       console.log(e);
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
            const slicedData = jsonData[sportType].slice(index + 40, index + 44);
            const matchInfo = leaveUnnecessaryData(slicedData);
            return ({
                [item]: matchInfo
            });
        });
        if (sportType === 'basketball') {
            yield put(basketballRequestSucceed(matchData))
        } else if (sportType === 'valleyball'){
            yield put(valleyballRequestSucceed(matchData))
        } else if (sportType === 'rugby'){
            yield put(rugbyRequestSucceed(matchData))
        }
        yield put(changeSportType(`${sportType}`));
        yield put(setLoadingState(false));
    } catch (e) {
        yield put(setLoadingState(false));
        yield put(setErrorsState(e));
        console.log(e);
    }
}

function* clearErrorWithInterval() {
        try {
            yield delay(7000);
            yield put(setErrorsState(null))
        } catch (e) {
            alert(e.message)
        }
}

export function* sportSaga() {
    yield all([
        takeLatest(sportActionTypes.GET_FOOTBALL_REQUEST, footballRequest),
        takeLatest(sportActionTypes.GET_BASKETBALL_REQUEST, basketballRequest),
        takeLatest(sportActionTypes.GET_VALLEYBALL_REQUEST, valleyballRequest),
        takeLatest(sportActionTypes.GET_RUGBY_REQUEST, rugbyRequest),
        takeLatest(CLEAR_ERROR_WITH_INTERVAL, clearErrorWithInterval)
    ])
} 

