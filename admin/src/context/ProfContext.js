import createDataContext from './createDataContext';
import api from '../api/api';

const profReducer = (state, action) => {
    switch (action.type) {
        case 'GET_ALL_PROFS':
            return {
                ...state,
                profs: action.payload,
                errorMessage: ''
            };
        case 'CREATE_PROF':
            return {
                ...state,
                profs: [...state.profs, action.payload],
                prof: action.payload,
                errorMessage: ''
            };
        case 'GET_PROF_BY_ID':
            return {
                ...state,
                prof: action.payload,
                errorMessage: ''
            };
        case 'REMOVE_PROF':
            return {
                ...state,
                profs: state.profs.filter(
                    prof => prof.id !== action.payload.id
                ),
                prof: action.payload,
                errorMessage: ''
            };
        case 'EDIT_PROF':
            return {
                ...state,
                prof: action.payload,
                errorMessage: ''
            };
        case 'ADD_ERROR':
            return { ...state, errorMessage: action.payload };
        default:
            return state;
    }
};

const getAllProfs = dispatch => async () => {
    try {
        const res = await api.get('/profs');
        dispatch({ type: 'GET_ALL_PROFS', payload: res.data.data });
    } catch (err) {
        console.log(err);
        dispatch({ type: 'ADD_ERROR', payload: 'Something went wrong' });
    }
};

const createProf = dispatch => async prof => {
    try {
        const res = await api.post('/profs/create-prof', prof);
        dispatch({ type: 'CREATE_PROF', payload: res.data.data });
    } catch (err) {
        console.log(err);
        dispatch({ type: 'ADD_ERROR', payload: 'Something went wrong' });
    }
};

const getProfById = dispatch => async ({ id }) => {
    try {
        const res = await api.get(`/profs/${id}`);
        dispatch({ type: 'GET_PROF_BY_ID', payload: res.data.data });
    } catch (err) {
        console.log(err);
        dispatch({ type: 'ADD_ERROR', payload: 'Something went wrong' });
    }
};

const removeProf = dispatch => async ({ id }) => {
    try {
        const res = await api.delete(`/profs/${id}`);
        dispatch({ type: 'REMOVE_PROF', payload: res.data.data });
    } catch (err) {
        console.log(err);
        dispatch({ type: 'ADD_ERROR', payload: 'Something went wrong' });
    }
};

export const { Context, Provider } = createDataContext(
    profReducer,
    { getAllProfs, createProf, getProfById, removeProf },
    { profs: [], prof: null, errorMessage: '' }
);
