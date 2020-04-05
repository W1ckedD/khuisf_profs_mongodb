import createDataContext from './createDataContext';
import api from '../api/api';

const positionReducer = (state, action) => {
    switch (action.type) {
        case 'GET_ALL_POSITIONS':
            return { ...state, positions: action.payload, errorMessage: '' };
        case 'CREATE_POSITION':
            return {
                ...state,
                positions: [...state.positions, action.payload],
                position: action.payload,
                errorMessage: ''
            };
        case 'REMOVE_POSITION':
            return {
                ...state,
                positions: state.positions.filter(
                    pos => pos.id !== action.payload.id
                ),
                position: action.payload,
                errorMessage: ''
            };
        default:
            return state;
    }
};

const getAllPositions = dispatch => async () => {
    try {
        const res = await api.get('/positions');
        dispatch({ type: 'GET_ALL_POSITIONS', payload: res.data.data });
    } catch (err) {
        console.log(err);
        dispatch({ type: 'ADD_ERROR', payload: 'Something went wrong' });
    }
};

const createPosition = dispatch => async ({ name }) => {
    try {
        const res = await api.post('/positions/create-position', { name });
        dispatch({ type: 'CREATE_POSITION', payload: res.data.data });
    } catch (err) {
        console.log(err);
        dispatch({ type: 'ADD_ERROR', payload: 'Something went wrong' });
    }
};

const removePosition = dispatch => async ({ id }) => {
    try {
        const res = await api.delete(`/positions/${id}`);
        dispatch({ type: 'REMOVE_POSITION', payload: res.data.data });
    } catch (err) {
        console.log(err);
        dispatch({ type: 'ADD_ERROR', payload: 'Something went wrong' });
    }
};

export const { Context, Provider } = createDataContext(
    positionReducer,
    { getAllPositions, createPosition, removePosition },
    { positions: [], position: null, errorMessage: '' }
);
