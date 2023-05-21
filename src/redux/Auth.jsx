import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    loggedIn: false,
    error: null,
    user: null
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // Login
        loginUserLoading: state => {
            state.isLoading = true;
        },
        loginUserSuccsess: state => {},
        loginUserFailure: state => {},
        // Register
        registerUserLoading: state => {
            state.isLoading = true;
        },
        registerUserSuccsess: state => {
            state.isLoading = false;
            state.loggedIn = true;
        },
        registerUserFailure: state => {
            state.isLoading = false;
            state.error = 'Error'
        },
    }
})

export const {loginUserLoading, registerUserLoading, registerUserSuccsess, registerUserFailure} = authSlice.actions;
export default authSlice.reducer;