import createDataContext from './createDataContext';
import api from '../api/api';

const facultyReducer = (state, action) => {
    switch (action.type) {
        case 'GET_ALL_FACULTIES':
            return { ...state, faculties: action.payload, errorMessage: '' };
        case 'CREATE_FACULTY':
            return {
                ...state,
                faculties: [...state.faculties, action.payload],
                faculty: action.payload,
                errorMessage: ''
            };
        case 'REMOVE_FACULTY':
            return {
                ...state,
                faculties: state.faculties.filter(
                    fac => fac.id !== action.payload.id
                ),
                faculty: action.payload,
                errorMessage: ''
            };
        case 'ADD_ERROR':
            return { ...state, errorMessage: action.payload };
        default:
            return state;
    }
};

const getAllFaculties = dispatch => async () => {
    try {
        const res = await api.get('/faculties');
        dispatch({ type: 'GET_ALL_FACULTIES', payload: res.data.data });
    } catch (err) {
        console.log(err);
        dispatch({ type: 'ADD_ERROR', payload: 'Something went wrong' });
    }
};

const createFaculty = dispatch => async ({ name }) => {
    try {
        const res = await api.post('/faculties/create-faculty', {}, { data: { name } });
        dispatch({ type: 'CREATE_FACULTY', payload: res.data.data });
    } catch (err) {
        console.log(err);
        dispatch({ type: 'ADD_ERROR', payload: 'Something went wrong' });
    }
};

const removeFaculty = dispatch => async ({ id }) => {
    try {
        const res = await api.delete(`/faculties/${id}`);
        dispatch({ type: 'REMOVE_FACULTY', payload: res.data.data });
    } catch (err) {
        console.log(err);
        dispatch({ type: 'ADD_ERROR', payload: 'Something went wrong' });
    }
};

export const { Context, Provider } = createDataContext(
    facultyReducer,
    { getAllFaculties, createFaculty, removeFaculty },
    { faculties: [], faculty: null, errorMessage: '' }
);
