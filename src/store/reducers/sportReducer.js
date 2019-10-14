import { fromJS } from "immutable";
import {
    ERROR_STATE,
    SET_LOADING_STATE,
    SET_SPORT_TYPE,
    sportActionTypes
} from "../actions/actionTypes";

const initialState = fromJS({
    currentPageSport: 'football',
    football: [],
    basketball: [],
    rugby: [],
    valleyball: [],
    isLoading: false,
    error: ''
});

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case sportActionTypes.SPORT_REQUEST_SUCCEED:
            return state.set(payload.sportType, fromJS(payload.data));
        case SET_SPORT_TYPE:
            return state.set('currentPageSport', fromJS(payload.sportType));
        case SET_LOADING_STATE:
            return state.set('isLoading', fromJS(payload.isLoading));
        case ERROR_STATE:
            return state.set('error', fromJS(payload.error));
        default:
            return state;
    }
};
