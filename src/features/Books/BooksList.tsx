import './BookList.scss';

import { useEffect, useReducer } from 'react';
import type { RootState } from '@/store/store';
import { useSelector } from 'react-redux';
import Spinner from '@/components/elements/Spinner/Spinner';
import { IBook, IBookOptions } from '@/types/interfaces';
import BookCard from './BookCard';
import DetailedBook from './DetailedBook';
import Positioner from '@/components/elements/Positioner/Positioner';
import { Button, Typography, Box } from '@mui/material';
import useLoadBooks from '@/hooks/useLoadBooks';

interface IBookListState {
  detailedBook: IBook | null;
  currentScrollPosition: number;
  memorizedScrollPosition: number;
}

const BookList = (): JSX.Element => {
  const booksLoading = useSelector<RootState, boolean>((state) => state.bookSlice.booksLoading);
  const booksAppendLoading = useSelector<RootState, boolean>((state) => state.bookSlice.booksAppendLoading);
  const bookList = useSelector<RootState, IBook[]>((state) => state.bookSlice.bookList);
  const bookOptions = useSelector<RootState, IBookOptions>((state) => state.bookSlice.bookOptions);
  const { loadBooks } = useLoadBooks();
  const [state, setState] = useReducer(
    (state: IBookListState, action: Partial<IBookListState>) => ({ ...state, ...action }),
    {
      detailedBook: null,
      currentScrollPosition: 0,
      memorizedScrollPosition: 0,
    },
  );
  // Maintain scroll postion after leaving detailed view
  const onScroll = (e: any) => {
    setState({ currentScrollPosition: e.target.documentElement.scrollTop });
  };
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [state.currentScrollPosition]);
  // Switch to detailed mode
  const setDetaledBookHandler = (book: IBook | null) => {
    if (book !== null) {
      setState({ memorizedScrollPosition: state.currentScrollPosition });
    }
    setTimeout(() => {
      window.scrollTo({
        top: book === null ? state.memorizedScrollPosition : 0,
      });
    }, 10);
    setState({ detailedBook: book });
  };
  // Book node
  const bookNode = state.detailedBook ? (
    <DetailedBook book={state.detailedBook} setDetailedBookHandler={setDetaledBookHandler} />
  ) : (
    <Box className={`book-list__container`}>
      {bookOptions.totalBooks ? <Typography variant="h5">{`Books found: ${bookOptions.totalBooks}`}</Typography> : null}
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
