import { SET_LOADING_STATE, sportActionTypes } from "./actionTypes";

export function setLoadingState(isLoading) {
    return {
        type: SET_LOADING_STATE,
        payload: { isLoading }
    }
}

export function setErrorsState(error) {
    return {
        type: SET_LOADING_STATE,
        payload: { error }
    }
}

export function getFootballRequest() {
    return {
        type: sportActionTypes.GET_FOOTBALL_REQUEST,
        payload: {}
    }
}

export function footballRequestSucceed(data) {
    return {
        type: SET_LOADING_STATE,
        payload: { data }
    }
}


export function getBasketballRequest() {
    return {
        type: sportActionTypes.GET_BASKETBALL_REQUEST,
        payload: {}
    }
}

export function basketballRequestSucceed(data) {
    return {
        type: sportActionTypes.BASKETBALL_REQUEST_SUCCEED,
        payload: { data }
    }
}

export function getValleyballRequest() {
    return {
        type: SET_LOADING_STATE,
        payload: {}
    }

}

export function valleyballRequestSucced(data) {
    return {
        type: SET_LOADING_STATE,
        payload: { data }
    }
}

export function getRugbyRequest() {
    return {
        type: sportActionTypes.GET_RUGBY_REQUEST,
        payload: {}
    }
}

export function rugbyRequestSucceed() {
    return {
        type: sportActionTypes.RUGBY_REQUEST_SUCCEED,
        payload: {}
    }
}

