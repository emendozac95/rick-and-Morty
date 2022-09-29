import { configureStore } from '@reduxjs/toolkit';
import { charactersSlice } from './characters/character';
import { queryStringSlice } from './characters/queryString';

export const store = configureStore({
    reducer: {
        characters: charactersSlice.reducer,
        queryString: queryStringSlice.reducer
    },
});