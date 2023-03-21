import { createSlice } from '@reduxjs/toolkit';

import { IBook, IBookOptions } from '@/types/interfaces';

interface IBookState {
  booksLoading: boolean;
  booksAppendLoading: boolean;
  booksLoaded: boolean;
  bookList: IBook[];
  bookOptions: IBookOptions;
}

const initialBookState: IBookState = {
  booksLoading: false,
  booksAppendLoading: false,
  booksLoaded: false,
  bookList: [],
  bookOptions: {
    totalBooks: 0,
    searchQuery: '',
    category: 'all',
    sortQuery: 'relevance',
    currentPosition: 0,
  },
};

const bookSlice = createSlice({
  name: 'books',
  initialState: initialBookState,
  reducers: {
    setBooks: (state, action) => {
      const { newBooks, bookOptions } = action.payload;
      state.bookList = newBooks;
      state.bookOptions = bookOptions;
    },
    addBooks: (state, action) => {
      const { newBooks } = action.payload;
      state.bookList = state.bookList.concat(newBooks);
    },
    setBooksLoading: (state, action) => {
      const isLoading = action.payload.loading;
      action.payload.type === 'new' ? (state.booksLoading = isLoading) : (state.booksAppendLoading = isLoading);
    },
  },
});

export default bookSlice;
