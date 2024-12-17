import { createSlice } from '@reduxjs/toolkit';
import {TransactionType} from "@/types/components/TransactionType";
import {UserType} from "@/types/dashboard";

interface NavState {
    transactions: TransactionType[];
    users: UserType[];
}

const initialState: NavState = {
    transactions: [],
    users: [],
};

export const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        updateTransactions: (state, dispatch) => {
            state.transactions = dispatch.payload;
        },
        updateUsers: (state, dispatch) => {
            state.users = dispatch.payload;
        },
    },
});

export const { updateTransactions, updateUsers } = dashboardSlice.actions;
export default dashboardSlice.reducer;