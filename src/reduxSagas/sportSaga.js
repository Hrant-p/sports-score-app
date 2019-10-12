import { call, put, all, takeLatest } from 'redux-saga/effects';
import { setErrorsState, setLoadingState } from "../store/actions/sportActionCreators";
import { sportActionTypes } from "../store/actions/actionTypes";

function* footballRequest() {
    try {
       yield put(setLoadingState(true));
       yield put(setLoadingState(false));

    } catch (e) {
       yield setLoadingState(false);
       yield setErrorsState(e);
       console.log(e);
    }
}

function* valleyballRequest() {
    try {
       yield put(setLoadingState(true));
       yield put(setLoadingState(false));

    } catch (e) {
       yield setLoadingState(false);
       yield setErrorsState(e);
       console.log(e);
    }
}

function* basketballRequest() {
    try {
       yield put(setLoadingState(true));
       yield put(setLoadingState(false));

    } catch (e) {
       yield setLoadingState(false);
       yield setErrorsState(e);
       console.log(e);
    }
}

function* rugbyRequest() {
    try {
       yield put(setLoadingState(true));
       yield put(setLoadingState(false));

    } catch (e) {
       yield setLoadingState(false);
       yield setErrorsState(e);
       console.log(e);
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

