import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Account} from "@/generated/auth_pb";

// Define the shape of the auth state
export interface IAuthState {
    token: string | null;
    user?: Account.AsObject;
}

// Define the initial state of the auth feature
const initialState: IAuthState = {
    token: null,
    user: undefined,
}

// Create a slice of state for the auth feature
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: () => initialState,
        login: (state, action: PayloadAction<IAuthState>) => {
            state.token = action.payload.token;
        },
        updateAccount: (state, action: PayloadAction<Account.AsObject>) => {
            state.user = action.payload;
        },
    }
});

// Export the actions from the auth slice
export const {logout, login} = authSlice.actions;
export default authSlice.reducer;