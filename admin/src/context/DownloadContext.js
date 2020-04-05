import createDataContext from './createDataContext';
import api from '../api/api';

const downloadReducer = (state, action) => {
    switch (action.type) {
        case 'GET_ALL_DOWNLOADS':
            return { ...state, downloads: action.payload, errorMessage: '' };
        case 'CREATE_DOWNLOAD':
            return {
                ...state,
                downloads: [...state.downloads, action.payload],
                errorMessage: ''
            };
        case 'REMOVE_DOWNLOAD':
            return {
                ...state,
                downloads: state.downloads.filter(
                    d => d.id !== action.payload.id
                ),
                errorMessage: ''
            };
        case 'ADD_ERROR':
            return { ...state, errorMessage: action.payload };
        default:
            return state;
    }
};

const getAllDownloads = dispatch => async ({ profId }) => {
    try {
        const res = await api({
            url: '/download',
            method: 'GET',
            params: { profId }
        });
        console.log(res.data.data);
        dispatch({ type: 'GET_ALL_DOWNLOADS', payload: res.data.data });
    } catch (err) {
        console.log(err);
        dispatch({ type: 'ADD_ERROR', payload: 'Something went wrong' });
    }
};

const createDownload = dispatch => async ({ profId, name, url }) => {
    try {
        const res = await api({
            url: '/download/create-download',
            method: 'POST',
            params: { profId },
            data: { name, url }
        });
        dispatch({ type: 'CREATE_DOWNLOAD', payload: res.data.data });
    } catch (err) {
        console.log(err);
        dispatch({ type: 'ADD_ERROR', payload: 'Something went wrong' });
    }
};

const removeDownload = dispatch => async ({ profId, id }) => {
    try {
        const res = await api({
            url: `/download/delete-download/${id}`,
            method: 'DELETE',
            params: { profId }
        });
        dispatch({ type: 'REMOVE_DOWNLOAD', payload: res.data.data });
    } catch (err) {
        console.log(err);
        dispatch({ type: 'ADD_ERROR', payload: 'Something went wrong' });
    }
};

export const { Context, Provider } = createDataContext(
    downloadReducer,
    { getAllDownloads, createDownload, removeDownload },
    { downloads: [], errorMessage: '' }
);
