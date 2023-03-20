import './BookList.scss';

import { Container } from '@mui/system';
import axios from 'axios';
import React, { useEffect } from 'react';
import type { RootState } from '@/store/store';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '@/components/elements/Spinner/Spinner';
import { IBook } from '@/types/interfaces';
import BookCard from './BookCard';

const BookList = (): JSX.Element => {
  const booksLoading = useSelector<RootState, boolean>((state) => state.bookSlice.booksLoading);
  const bookList = useSelector<RootState, IBook[]>((state) => state.bookSlice.bookList);
  return (
    <>
      {booksLoading ? (
        <Spinner />
      ) : (
        <Container className={`booklist`}>
          {bookList.map((book: IBook) => {
            return <BookCard book={book} />;
          })}
        </Container>
      )}
    </>
  );
};

export default BookList;
