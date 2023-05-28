import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    article: [],
    error: null
}

export const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
        getArticleLoading: state => {
            state.isLoading = true;
        },
        getArticleSuccess: (state, action) => {
            state.isLoading = false;
            state.article = action.payload;
        },
        getArticleFailure: (state, action) => {
            state.error = action.payload
        }
    }
})

export const {getArticleLoading, getArticleSuccess, getArticleFailure} = articleSlice.actions;
export default articleSlice.reducer;