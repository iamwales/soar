import { configureStore } from '@reduxjs/toolkit';
import navReducer from './slices/navSlice';
import dashboardReducer from './slices/dashboardSlice';

export const store = configureStore({
    reducer: {
        nav: navReducer,
        dashboard: dashboardReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;