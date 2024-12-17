import { configureStore } from '@reduxjs/toolkit';
import navReducer from './slices/navSlice';
import dashboardReducer from './slices/dashboardSlice';
import settingReducer from "@/redux/slices/settingSlice";

export const store = configureStore({
    reducer: {
        nav: navReducer,
        dashboard: dashboardReducer,
        setting: settingReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;