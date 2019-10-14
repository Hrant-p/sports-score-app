import { fromJS } from "immutable";
import {
    ERROR_STATE,
    SET_LOADING_STATE, SET_SPORT_TYPE,
    sportActionTypes
} from "../actions/actionTypes";

const initialState = fromJS({
    currentPageSport: 'football',
    football: [],
    basketball: [],
    rugby: [],
    valleyball: [],
    isLoading: false,
    error: null
});

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case sportActionTypes.FOOTBALL_REQUEST_SUCCEED:
            return state.set('football', fromJS(payload.data));
        case sportActionTypes.BASKETBALL_REQUEST_SUCCEED:
            return state.set('basketball', fromJS(payload.data));//payload.sportType
        case sportActionTypes.VALLEYBALL_REQUEST_SUCCEED:
            return state.set('valleyball', fromJS(payload.data));
        case sportActionTypes.RUGBY_REQUEST_SUCCEED:
            return state.set('rugby', fromJS(payload.data));
        case SET_SPORT_TYPE:
            return state.set('currentPageSport', fromJS(payload.sportType));
        case SET_LOADING_STATE:
            return state.set('isLoading', fromJS(payload.isLoading));
        case ERROR_STATE:
            return state.set('error', fromJS(payload.error));
        default:
            return state;
    }
}
