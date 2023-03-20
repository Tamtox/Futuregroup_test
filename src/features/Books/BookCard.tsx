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
      <Typography variant="body1" className={`book-card__category`}>
        {book.volumeInfo.categories?.join(',') || 'No Category'}
      </Typography>
      <Typography variant="body1" className={`book-card__title`}>
        {book.volumeInfo.title}
      </Typography>
      <Typography variant="body1" className={`book-card__author`}>
        {book.volumeInfo.authors.join(',')}
      </Typography>
    </Card>
  );
};

export default BookCard;
