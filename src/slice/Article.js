import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  article: [],
  articleDetail: null,
  error: null,
};

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    getArticleLoading: (state) => {
      state.isLoading = true;
    },
    getArticleSuccess: (state, action) => {
      state.isLoading = false;
      state.article = action.payload;
    },
    getArticleFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    getArticleDetailLoading: (state) => {
      state.isLoading = true;
    },
    getArticleDetailSuccess: (state, action) => {
      state.isLoading = false;
      state.articleDetail = action.payload;
    },
    getArticleDetailFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    postArticleLoading: (state) => {
      state.isLoading = true;
    },
    postArticleSuccess: state => {
      state.isLoading = false;
    },
    postArticleFailure: state => {
      state.isLoading = false;
      state.error = 'Error';
    }
  }
});

export const {
  getArticleLoading,
  getArticleSuccess,
  getArticleFailure,
  getArticleDetailLoading,
  getArticleDetailSuccess,
  getArticleDetailFailure,
  postArticleLoading,
  postArticleSuccess,
  postArticleFailure
} = articleSlice.actions;
export default articleSlice.reducer;
