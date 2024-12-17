import { createSlice } from '@reduxjs/toolkit';
import {user} from "@/data/user";
import {ProfileType} from "@/types/setting/ProfileType";

interface SettingState {
    user: ProfileType;
}

const initialState: SettingState = {
    user: user,
};

export const settingSlice = createSlice({
    name: 'setting',
    initialState,
    reducers: {
        updateUser: (state, dispatch) => {
            state.user = dispatch.payload;
        },
    },
});

export const { updateUser } = settingSlice.actions;
export default settingSlice.reducer;