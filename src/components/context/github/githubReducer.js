import { SET_IS_LOADING, SET_USERS, CLEAR_USERS, SET_ALERT, RESET_ALERT, SET_USER, SET_REPO } from '../types';

export default (state, action) => {
    switch(action.type){
        case SET_IS_LOADING: 
            return { ...state, isLoading: action.payload };
        case SET_USERS: 
            return { ...state, users: action.payload };
        case CLEAR_USERS: 
            return { ...state, isLoading:false, users: [] };
        case SET_ALERT: 
            return { ...state, alert: action.payload } 
        case RESET_ALERT: 
            return { ...state, alert: null } 
        case SET_USER: 
            return { ...state, user: action.payload };
        case SET_REPO: 
            return { ...state, repos: action.payload } 
        default:
            return state;
    }
}