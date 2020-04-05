import createDataContext from './createDataContext';
import axios from 'axios';

const url = 'https://cors-anywhere.herokuapp.com/https://khuisf-profs.herokuapp.com';
const authReducer = (state, action) => {
    switch (action.type) {
        case 'SIGN_UP':
            return { ...state, token: action.payload, errorMessage: '' };
        case 'SIGN_IN':
            return { ...state, token: action.payload, errorMessage: '' };
        case 'SIGN_OUT':
            return { ...state, token: null, errorMessage: '' };
        case 'ADD_ERROR':
            return { ...state, errorMessage: action.payload };
        default:
            return state;
    }
};

const signup = dispatch => async ({ username, password }) => {
    try {
        const res = await axios.post(`${url}/admin/create-admin`, {
            username,
            password
        });
        localStorage.setItem('token', res.data.token);
        dispatch({ type: 'SIGN_UP', payload: res.data.token });
    } catch (err) {
        console.log(err);
        dispatch({ type: 'ADD_ERROR', payload: 'This username is already taken' });
    }
};

const signin = dispatch => async ({ username, password }) => {
    try {
        const res = await axios.post(`${url}/admin/signin`, { username, password });
        localStorage.setItem('token', res.data.token);
        dispatch({ type: 'SIGN_IN', payload: res.data.token });
    } catch (err) {
        console.log(err);
        dispatch({ type: 'ADD_ERROR', payload: 'Invalid username and/or password' });
    }
};

const signout = dispatch => async () => {
    localStorage.removeItem('token');
    dispatch({ type: 'SIGN_OUT', payload: '' });
}

const checkIfAuthenticated = dispatch => async () => {
    const token = localStorage.getItem('token');
    if(token) {
        dispatch({ type: 'SIGN_IN', payload: token });
    } else {
        dispatch({ type: 'SIGN_OUT', payload: '' });
    }
}

export const { Context, Provider } = createDataContext(
    authReducer,
    { signup, signin, signout, checkIfAuthenticated },
    { token: null, errorMessage: '' }
);
