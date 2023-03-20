import { createSlice } from '@reduxjs/toolkit';

import { IBook } from '@/types/interfaces';

interface IBookState {
  booksLoading: boolean;
  booksLoaded: boolean;
  bookList: IBook[];
}

const initialBookState = {
  booksLoading: false,
  bookList: [],
};

const bookSlice = createSlice({
  name: 'books',
  initialState: initialBookState,
  reducers: {
    setBooks: (state, action) => {
      const newBooks: IBook[] = action.payload;
      state.bookList = state.bookList.concat();
    },
    setBooksLoading: (state, action) => {
      state.booksLoading = action.payload;
    },
  },
});

export default bookSlice;
