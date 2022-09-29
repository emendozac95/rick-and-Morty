import { createSlice } from '@reduxjs/toolkit';

export const queryStringSlice = createSlice({
    name: 'queryString',
    initialState: {
        query: ''
    },
    reducers: {
        setQueryString: (state, payload) => {
            state.query = payload;
        }
    },
});


export const { setQueryString } = queryStringSlice.actions;
