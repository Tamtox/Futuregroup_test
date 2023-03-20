import './BookList.scss';

import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import type { RootState } from '@/store/store';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '@/components/elements/Spinner/Spinner';
import { IBook } from '@/types/interfaces';
import BookCard from './BookCard';
import DetailedBook from './DetailedBook';

const BookList = (): JSX.Element => {
  const booksLoading = useSelector<RootState, boolean>((state) => state.bookSlice.booksLoading);
  const bookList = useSelector<RootState, IBook[]>((state) => state.bookSlice.bookList);
  const [detailedBook, setDetailedBook] = useState<IBook | null>(null);
  // Switch to detailed mode
  const setDetaledBookHandler = (book: IBook) => {
    setDetailedBook(book);
  };
  const bookNode = detailedBook ? (
    <DetailedBook />
  ) : (
    <Box className={`book-list`}>
      {bookList.map((book: IBook) => {
        return <BookCard book={book} setDetailedBookHandler={setDetaledBookHandler} />;
      })}
    </Box>
  );
  return <>{booksLoading ? <Spinner height="90vh" /> : bookNode}</>;
};

export default BookList;
