import { createSlice } from '@reduxjs/toolkit';
import { setItem } from '../helpers/Persistence-storage';

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
            state.user = action.payload;
            setItem('token', action.payload.token)
        },
        siginUserFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload
        },
        logoutUser: (state) => {
            state.user = null;
            state.loggedIn = false;
        }
    }
})

export const {siginUserLoading, siginUserSuccsess, siginUserFailure, logoutUser} = authSlice.actions;
export default authSlice.reducer;