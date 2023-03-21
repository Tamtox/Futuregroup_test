import './BookCard.scss';

import { Box, Card, Typography } from '@mui/material';
import type { IBook } from '@/types/interfaces';
import noimage from '@/assets/No-Image.png';

type Props = {
  book: IBook;
  setDetailedBookHandler: (book: IBook | null) => void;
};

const BookCard = ({ book, setDetailedBookHandler }: Props): JSX.Element => {
  return (
    <Card
      className="book-card fade-in-top"
      onClick={() => {
        setDetailedBookHandler(book);
      }}
    >
      <Box className={`book-card__image__container`}>
        <img
          src={`${book.volumeInfo.imageLinks?.smallThumbnail ? book.volumeInfo.imageLinks.smallThumbnail : noimage}`}
          alt={`${book.volumeInfo.description ? book.volumeInfo.description : ''}`}
          className={`book-card__image`}
        />
      </Box>
      <Box className={`book-card__info-container`}>
        <Typography variant="body1" className={`book-card__category book-card__text__element`}>
          {book.volumeInfo.categories ? book.volumeInfo.categories[0] : ''}
        </Typography>
        <Typography variant="body1" className={`book-card__title book-card__text__element`}>
          {book.volumeInfo.title ? book.volumeInfo.title : ''}
        </Typography>
        <Typography variant="body1" className={`book-card__author book-card__text__element`}>
          {book.volumeInfo.authors ? book.volumeInfo.authors?.join(',') : ''}
        </Typography>
      </Box>
    </Card>
  );
};

export default BookCard;
