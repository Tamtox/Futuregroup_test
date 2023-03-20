import './DetailedBook.scss';

import { Box } from '@mui/material';
import type { IBook } from '@/types/interfaces';
import type { RootState } from '@/store/store';
import { useSelector } from 'react-redux';

import Spinner from '@/components/elements/Spinner/Spinner';

const DetailedBook = (): JSX.Element => {
  const booksLoading = useSelector((state: RootState) => state.bookSlice.booksLoading);
  return <Box className="detailed-book"></Box>;
};

export default DetailedBook;
