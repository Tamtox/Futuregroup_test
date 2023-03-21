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
    category: 'All',
    sortQuery: 'Relevance',
    currentPosition: 0,
  },
};

const bookSlice = createSlice({
  name: 'books',
  initialState: initialBookState,
  reducers: {
    setBooks: (state, action) => {
      const { newBooks, bookOptions, loadType } = action.payload;
      loadType === 'new' ? (state.bookList = newBooks) : (state.bookList = state.bookList.concat(newBooks));
      state.bookOptions = bookOptions;
    },
    setBooksLoading: (state, action) => {
      const isLoading = action.payload.loading;
      action.payload.type === 'new' ? (state.booksLoading = isLoading) : (state.booksAppendLoading = isLoading);
    },
  },
});

export default bookSlice;
