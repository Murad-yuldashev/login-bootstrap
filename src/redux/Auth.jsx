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
        loginUserLoading: state => {
            state.isLoading = true;
        },
        loginUserSuccsess: state => {},
        loginUserFailure: state => {},
    }
})

export const {loginUserLoading} = authSlice.actions;
export default authSlice.reducer;