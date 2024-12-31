/* eslint-disable @typescript-eslint/no-explicit-any */
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducers/auth/authSlice";
import { userLanguageSlice } from "./reducers/user/userLanguage";



export const store = configureStore({
    reducer:{
        auth:authSlice.reducer,
        userLanguage:userLanguageSlice.reducer,
        }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export type ExtendedAppDispatch = (action: any) => any;
export default store;