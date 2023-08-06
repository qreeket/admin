import {combineReducers, configureStore} from "@reduxjs/toolkit";
import authReducer from "@/store/features/auth";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

// Create the store
export const store = configureStore({
    reducer: persistReducer({
        key: "root",
        storage,
        version: 1,
    }, combineReducers({
        auth: authReducer,
    })),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Create a hook for using the store in components
export const useAuthSelector: TypedUseSelectorHook<RootState> = useSelector;

// Create a hook for dispatching actions
export const useAuthDispatch = () => store.dispatch;