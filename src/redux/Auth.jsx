import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    loggedIn: false,
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
        registerUserSuccsess: state => {},
        registerUserFailure: state => {},
    }
})

export const {loginUserLoading, registerUserLoading} = authSlice.actions;
export default authSlice.reducer;