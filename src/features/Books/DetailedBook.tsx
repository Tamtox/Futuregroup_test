import './DetailedBook.scss';

import { Box, Button, Typography } from '@mui/material';
import type { IBook } from '@/types/interfaces';
import noimage from '@/assets/No-Image.png';

type DetailedBookProps = {
  book: IBook;
  setDetailedBookHandler: (book: IBook | null) => void;
};

const DetailedBook = ({ book, setDetailedBookHandler }: DetailedBookProps): JSX.Element => {
  return (
    <Box className="detailed-book__container">
      <Box className="detailed-book">
        <Box className={`detailed-book__image__container`}>
          <img
            src={`${book.volumeInfo.imageLinks?.thumbnail ? book.volumeInfo.imageLinks.thumbnail : noimage}`}
            alt={`${book.volumeInfo.description ? book.volumeInfo.description : ''}`}
            className={`detailed-book__image`}
          />
        </Box>
        <Box className={`detailed-book__info__container`}>
          <Typography variant="body1" className={`book-card__category book-card__text__element`}>
            {book.volumeInfo.categories ? book.volumeInfo.categories.join('/') : ''}
          </Typography>
          <Typography variant="h5" className={`book-card__title book-card__text__element`}>
            {book.volumeInfo.title ? book.volumeInfo.title : ''}
          </Typography>
          <Typography variant="body1" className={`book-card__author book-card__text__element`}>
            {book.volumeInfo.authors ? book.volumeInfo.authors?.join(',') : ''}
          </Typography>
          {book.volumeInfo.description ? (
            <Typography variant="body1" className={`book-card__description book-card__text__element`}>
              {book.volumeInfo.description}
            </Typography>
          ) : null}
        </Box>
      </Box>
      <Button
        onClick={() => {
          setDetailedBookHandler(null);
        }}
        variant="contained"
        size="large"
      >
        Return to book list
      </Button>
    </Box>
  );
};

export default DetailedBook;
