import './BookCard.scss';

import { Box, Card, Typography } from '@mui/material';
import type { IBook } from '@/types/interfaces';

type Props = {
  book: IBook;
  setDetailedBookHandler: (book: IBook) => void;
};

const BookCard = ({ book, setDetailedBookHandler }: Props): JSX.Element => {
  return (
    <Card className="book-card fade-in-top">
      <Box className={`book-card__image__container`}>
        <img
          src={`${book.volumeInfo.imageLinks.smallThumbnail}`}
          alt=""
          className={`book-card__image`}
          onClick={() => {
            setDetailedBookHandler(book);
          }}
        />
      </Box>
      <Box className={`book-card__info-container`}>
        <Typography variant="body1" className={`book-card__category book-card__text__element`}>
          {book.volumeInfo.categories?.join(',') || 'No Category'}
        </Typography>
        <Typography variant="body1" className={`book-card__title book-card__text__element`}>
          {book.volumeInfo.title || 'Title unknown'}
        </Typography>
        <Typography variant="body1" className={`book-card__author book-card__text__element`}>
          {book.volumeInfo.authors?.join(',') || 'Author unknown'}
        </Typography>
      </Box>
    </Card>
  );
};

export default BookCard;
