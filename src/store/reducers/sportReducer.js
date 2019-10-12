import { fromJS } from "immutable";
import {sportActionTypes} from "../actions/actionTypes";

const initialState = fromJS({
    sportType: 'football',
    infoByCountry: [],
    loading: false,
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
        default:
            return state;
    }
}

