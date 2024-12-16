import { createSlice } from '@reduxjs/toolkit';
import {TransactionType} from "@/types/components/TransactionType";

interface NavState {
    transactions: TransactionType[];
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