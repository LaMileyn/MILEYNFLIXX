import {configureStore} from "@reduxjs/toolkit";
import themeReducer from "../reducers/themeReducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";


export const store = configureStore({
    reducer : {
        theme : themeReducer,
    },
})
//
export type RootState = ReturnType<typeof store.getState>
//
export type AppDispatch = typeof store.dispatch

//typed selector
export const useTypedSelector : TypedUseSelectorHook<RootState> = useSelector
//typed dispatch
export const useTypedDispatch = () => useDispatch<AppDispatch>()