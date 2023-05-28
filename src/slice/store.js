import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './Auth';
import ArticleReducer from './Article';

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    article: ArticleReducer
  },
  devTools: process.env.NODE_ENV !== 'production',
})