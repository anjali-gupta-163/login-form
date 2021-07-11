import { combineReducers } from 'redux';
import { SET_LOGIN_DETAILS } from '../actions/index';

function details(state = [],action){
    switch(action.type){
        case SET_LOGIN_DETAILS:
            return action.items;
        default:
            return state;
    }
}

const rootReducer = combineReducers({details});

export default rootReducer;