import { createSlice } from '@reduxjs/toolkit';

interface NavState {
    isOpen: boolean;
}

const initialState: NavState = {
    isOpen: false,
};

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        toggleNav: (state) => {
            state.isOpen = !state.isOpen;
        },
        closeNav: (state) => {
            state.isOpen = false;
        },
        openNav: (state) => {
            state.isOpen = true;
        },
    },
});

export const { toggleNav, closeNav, openNav } = navSlice.actions;
export default navSlice.reducer;