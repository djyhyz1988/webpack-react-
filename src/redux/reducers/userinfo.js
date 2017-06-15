import * as actionTypes from '../actions/actionTypes';

let initialState = {};

export function userinfo(state = initialState,action) {
    switch (action.type){
        case actionTypes.USER_INFO_DETAIL:
            let newData = action.data;
            return {
                ...state,
                ...newData
            }
        default:
            return state;
    }
}