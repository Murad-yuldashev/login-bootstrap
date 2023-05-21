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
        siginUserLoading: state => {
            state.isLoading = true;
        },
        siginUserSuccsess: (state, action) => {
            state.isLoading = false;
            state.loggedIn = true;
            state.user = action.payload
        },
        siginUserFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload
        },
    }
})

export const {siginUserLoading, siginUserSuccsess, siginUserFailure} = authSlice.actions;
export default authSlice.reducer;