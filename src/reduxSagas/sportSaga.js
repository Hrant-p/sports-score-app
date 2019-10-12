import { call, put, all, takeLatest } from 'redux-saga/effects';
import { setErrorsState, setLoadingState} from "../store/actions/sportActionCreators";
import {sportActionTypes} from "../store/actions/actionTypes";

function* footballRequest() {
    try {
       yield put(setLoadingState(true));
       yield put(setLoadingState(false));

    } catch (e) {
       yield setLoadingState(false);
       yield setErrorsState(e)
    }
};

export function* sportSaga() {
    yield all([
        takeLatest(sportActionTypes.GET_FOOTBALL_REQUEST, footballRequest)
    ])
} 

