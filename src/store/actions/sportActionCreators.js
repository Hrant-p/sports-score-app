import {
    SET_LOADING_STATE,
    SET_SPORT_TYPE,
    sportActionTypes
} from "./actionTypes";

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

export function getFootballRequest(history) {
    return {
        type: sportActionTypes.GET_FOOTBALL_REQUEST,
        payload: { history }
    }
}

export function footballRequestSucceed(data) {
    return {
        type: sportActionTypes.FOOTBALL_REQUEST_SUCCEED,
        payload: { data }
    }
}


export function getBasketballRequest(history) {
    return {
        type: sportActionTypes.GET_BASKETBALL_REQUEST,
        payload: { history }
    }
}

export function basketballRequestSucceed(data) {
    return {
        type: sportActionTypes.BASKETBALL_REQUEST_SUCCEED,
        payload: { data }
    }
}

export function getValleyballRequest(history) {
    return {
        type: sportActionTypes.GET_VALLEYBALL_REQUEST,
        payload: { history }
    }

}

export function valleyballRequestSucced(data) {
    return {
        type: sportActionTypes.VALLEYBALL_REQUEST_SUCCEED,
        payload: { data }
    }
}

export function getRugbyRequest(history) {
    return {
        type: sportActionTypes.GET_RUGBY_REQUEST,
        payload: { history }
    }
}

export function rugbyRequestSucceed() {
    return {
        type: sportActionTypes.RUGBY_REQUEST_SUCCEED,
        payload: {}
    }
}

export function changeSportType(sportType) {
    return {
        type: SET_SPORT_TYPE,
        payload: { sportType }
    }
}

