import { configureStore } from '@reduxjs/toolkit';

import bookSlice from './bookSlice';

const store = configureStore({
  reducer: {
    bookSlice: bookSlice.reducer,
  },
});

export const stockActions = bookSlice.actions;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;