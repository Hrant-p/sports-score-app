import {
    ERROR_STATE,
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
        type: ERROR_STATE,
        payload: { error }
    }
}

export function getFootballRequest(history) {
    return {
        type: sportActionTypes.GET_FOOTBALL_REQUEST,
        payload: { history }
    }
}

export function getBasketballRequest(history) {
    return {
        type: sportActionTypes.GET_BASKETBALL_REQUEST,
        payload: { history }
    }
}

export function getValleyballRequest(history) {
    return {
        type: sportActionTypes.GET_VALLEYBALL_REQUEST,
        payload: { history }
    }

}

export function getRugbyRequest(history) {
    return {
        type: sportActionTypes.GET_RUGBY_REQUEST,
        payload: { history }
    }
}

export function sportRequestSucceed(sportType, data) {
    return {
        type: sportActionTypes.SPORT_REQUEST_SUCCEED,
        payload: { sportType, data }
    }
}

export function changeSportType(sportType) {
    return {
        type: SET_SPORT_TYPE,
        payload: { sportType }
    }
}
