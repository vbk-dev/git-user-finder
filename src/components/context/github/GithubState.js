import React, { useReducer } from 'react';
import Axios from 'axios';

import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import { SET_IS_LOADING, SET_USERS, CLEAR_USERS, SET_ALERT, RESET_ALERT, SET_USER, SET_REPO } from '../types';

let githubClientID = null;
let githubClientSecret = null;

if (process.env.NODE_ENV !== 'production'){
    githubClientID = process.env.REACT_APP_GIT_CLIENT_ID;
    githubClientSecret = process.env.REACT_APP_GIT_CLIENT_PASSWORD;
} else {
    githubClientID = process.env.GIT_CLIENT_ID;
    githubClientSecret = process.env.GIT_CLIENT_PASSWORD;
}

const GithubState = props => {

    const initialState = {
        users: [],
        user: {},
        alert: null,
        repos: [],
        isLoading: false
    };

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    const setAlertHandler = (msg, type) =>  dispatch({type: SET_ALERT, payload: {msg, type}});

    const resetAlertHandler = () => dispatch({type: RESET_ALERT});

    const fetchUserDetailsHandler = async username => {
        dispatch({type: SET_IS_LOADING, payload: true});
        const res = await Axios.get(`https://api.github.com/users/${username}?
            client_id=${githubClientID}&
            client_secret=${githubClientSecret}`);
        dispatch({type: SET_USER, payload: res.data});
        dispatch({type: SET_IS_LOADING, payload: false});
    }

    const fetchReposHandler = async username => {
        dispatch({type: SET_IS_LOADING, payload: true});
        const res = await Axios.get(`https://api.github.com/users/${username}/repos?page=1&sort=created:asc&
            client_id=${githubClientID}&
            client_secret=${githubClientSecret}`);
        dispatch({type: SET_REPO, payload: res.data});
        dispatch({type: SET_IS_LOADING, payload: false});
    }

    const clearUsersHandler = () => dispatch({type: CLEAR_USERS});

    const fetchUsersHandler = async text =>{
        dispatch({type: SET_IS_LOADING, payload: true});
        const res = await Axios.get(`https://api.github.com/search/users?q=${text}&
            client_id=${githubClientID}&
            client_secret=${githubClientSecret}`);
        dispatch({type: SET_USERS, payload: res.data.items});
        dispatch({type: SET_IS_LOADING, payload: false});
    }

    return <GithubContext.Provider value={{
        users: state.users,
        user: state.user,
        alert: state.alert,
        repos: state.repos,
        isLoading: state.user.isLoading,
        fetchUsersHandler,
        clearUsersHandler,
        setAlertHandler,
        fetchUserDetailsHandler,
        resetAlertHandler,
        fetchReposHandler
    }}>
        {props.children}
    </GithubContext.Provider>
}

export default GithubState;