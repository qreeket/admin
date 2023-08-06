"use client";

import {store} from '@/store/store'
import {Provider} from "react-redux";
import React from "react";
import {persistStore} from "redux-persist";
import {PersistGate} from "redux-persist/integration/react";

// Persistor is used to persist the redux store to local storage
const persistor = persistStore(store);

// AppProvider is used to wrap the entire application in the redux store
export default function AppProvider({children}: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    )
}
