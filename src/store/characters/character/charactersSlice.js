import { createSlice } from '@reduxjs/toolkit';

export const charactersSlice = createSlice({
    name: 'characterList',
    initialState: {
        characters: [],
        isLoading: true
    },
    reducers: {
        setCharactersRed: (state, payload) => {
            state.characters = payload;
            state.isLoading = false;
        }
    },
});


export const { setCharactersRed } = charactersSlice.actions;
