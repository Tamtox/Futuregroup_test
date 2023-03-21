import './BookList.scss';

import { useState } from 'react';
import type { RootState } from '@/store/store';
import { useSelector } from 'react-redux';
import Spinner from '@/components/elements/Spinner/Spinner';
import { IBook, IBookOptions } from '@/types/interfaces';
import BookCard from './BookCard';
import DetailedBook from './DetailedBook';
import Positioner from '@/components/elements/Positioner/Positioner';
import { Button, Typography, Box } from '@mui/material';
import useLoadBooks from '@/hooks/useLoadBooks';

const BookList = (): JSX.Element => {
  const booksLoading = useSelector<RootState, boolean>((state) => state.bookSlice.booksLoading);
  const booksAppendLoading = useSelector<RootState, boolean>((state) => state.bookSlice.booksAppendLoading);
  const bookList = useSelector<RootState, IBook[]>((state) => state.bookSlice.bookList);
  const bookOptions = useSelector<RootState, IBookOptions>((state) => state.bookSlice.bookOptions);
  const { loadBooks } = useLoadBooks();
  const [detailedBook, setDetailedBook] = useState<IBook | null>(null);
  // Switch to detailed mode
  const setDetaledBookHandler = (book: IBook | null) => {
    setDetailedBook(book);
  };
  const bookNode = detailedBook ? (
    <DetailedBook book={detailedBook} setDetailedBookHandler={setDetaledBookHandler} />
  ) : (
    <Box className={`book-list__container`}>
      {bookOptions.totalBooks ? (
        <Typography variant="h5">{`Total books found:${bookOptions.totalBooks}`}</Typography>
      ) : null}
      <Box className={`book-list`}>
        {bookList.map((book: IBook) => {
          return <BookCard key={book.id + book.etag} book={book} setDetailedBookHandler={setDetaledBookHandler} />;
        })}
      </Box>
      {bookOptions.currentPosition + 30 <= bookOptions.totalBooks ? (
        <Button
          variant="contained"
          size="large"
          className="book-list__load"
          disabled={booksAppendLoading ? true : false}
          onClick={() => {
            const { searchQuery, sortQuery, category, currentPosition } = bookOptions;
            loadBooks(searchQuery, category, sortQuery, currentPosition, 'append');
          }}
        >
          Load More
        </Button>
      ) : null}
      {bookOptions.currentPosition >= 30 ? <Positioner /> : null}
    </Box>
  );
  return <>{booksLoading ? <Spinner height="90vh" /> : bookNode}</>;
};

export default BookList;
