import './BookCard.scss';

import { Box, Card, Typography } from '@mui/material';
import type { IBook } from '@/types/interfaces';

type Props = {
  book: IBook;
};

const BookCard = ({ book }: Props): JSX.Element => {
  return (
    <Card className="book-card">
      <Box className={`book-card__image__container`}>
        <img src="" alt="" className={`book-card__image`} />
      </Box>
      <Typography variant="body1" className={`book-card__category`}>
        {book.volumeInfo.categories.join(',')}
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
