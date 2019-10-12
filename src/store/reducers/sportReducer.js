import { fromJS } from "immutable";
import {
    ERROR_STATE,
    SET_LOADING_STATE,
    sportActionTypes
} from "../actions/actionTypes";

const initialState = fromJS({
    sportType: 'football',
    infoByCountry: [],
    isLoading: false,
    error: null
});

export default (state =initialState, { type, payload }) => {
    switch (type) {
        case sportActionTypes.FOOTBALL_REQUEST_SUCCEED:
            return state.set('infoByCountry', fromJS(payload.data));
        case sportActionTypes.BASKETBALL_REQUEST_SUCCEED:
            return state.set('infoByCountry', fromJS(payload.data));
        case sportActionTypes.VALLEYBALL_REQUEST_SUCCEED:
            return state.set('infoByCountry', fromJS(payload.data));
        case sportActionTypes.RUGBY_REQUEST_SUCCEED:
            return state.set('infoByCountry', fromJS(payload.data));
        case SET_LOADING_STATE:
            return state.set('isLoading', fromJS(payload.isLoading));
        case ERROR_STATE:
            return state.set('error', fromJS(payload.error));
        default:
            return state;
    }
}

