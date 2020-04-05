import createDataContext from './createDataContext';
import api from '../api/api';

const majorReducer = (state, action) => {
    switch (action.type) {
        case 'GET_ALL_MAJORS':
            return { ...state, majors: action.payload, errorMessage: '' };
        case 'CREATE_MAJOR':
            return {
                ...state,
                majors: [...state.majors, action.payload],
                major: action.payload,
                errorMessage: ''
            };
        case 'REMOVE_MAJOR':
            return {
                ...state,
                majors: state.majors.filter(
                    major => major.id !== action.payload.id
                ),
                major: action.payload,
                errorMessage: ''
            };
        case 'GET_MAJOR_BY_ID':
            return { ...state, major: action.payload, errorMessage: '' };
        case 'ADD_ERROR':
            return { ...state, errorMessage: action.payload };
        default:
            return state;
    }
};

const getAllMajors = dispatch => async () => {
    try {
        const res = await api.get('/majors');
        dispatch({ type: 'GET_ALL_MAJORS', payload: res.data.data });
    } catch (err) {
        console.log(err);
        dispatch({ type: 'ADD_ERROR', payload: 'Something went wrong' });
    }
};

const createMajor = dispatch => async ({ name }) => {
    try {
        const res = await api.post('/majors/create-major', { name });
        dispatch({ type: 'CREATE_MAJOR', payload: res.data.data });
    } catch (err) {
        console.log(err);
        dispatch({ type: 'ADD_ERROR', payload: 'Something went wrong' });
    }
};

const removeMajor = dispatch => async ({ id }) => {
    try {
        const res = await api.delete(`/majors/${id}`);
        dispatch({ type: 'REMOVE_MAJOR', payload: res.data.data });
    } catch (err) {
        console.log(err);
        dispatch({ type: 'ADD_ERROR', payload: 'Something went wrong' });
    }
};

const getMajorById = dispatch => async ({ id }) => {
    try {
        const res = await api.get(`/profs/${id}`);
        dispatch({ type: 'GET_MAJOR_BY_ID', payload: res.data.data });
    } catch (err) {
        console.log(err);
        dispatch({ type: 'ADD_ERROR', payload: 'Something went wrong' });
    }
};

export const { Context, Provider } = createDataContext(
    majorReducer,
    { getAllMajors, createMajor, removeMajor, getMajorById },
    { majors: [], major: null, errorMessage: '' }
);
