import { createSlice } from "@reduxjs/toolkit";

import { IBook } from "@/types/interfaces";

interface IBookState {
  booksLoading: boolean,
  booksLoaded: boolean,
  books: IBook[],
}

const initialBookState = {
  booksLoading: false,
  booksLoaded: false,
  books: [],
};

const bookSlice = createSlice({
  name: "books",
  initialState: initialBookState,
  reducers: {
    setBooks: (state, action) => {
      const newBooks: IBook[] = action.payload;
      state.books = state.books.concat();
    },
  }
})

export default bookSlice;

