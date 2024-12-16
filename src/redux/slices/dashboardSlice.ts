import { createSlice } from '@reduxjs/toolkit';
import {Transaction} from "@/types/dashboard";

interface NavState {
    transactions: Transaction[];
}

const initialState: NavState = {
    transactions: [],
};

export const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        updateTransactions: (state, dispatch) => {
            state.transactions = dispatch.payload;
        },
    },
});

export const { updateTransactions } = dashboardSlice.actions;
export default dashboardSlice.reducer;