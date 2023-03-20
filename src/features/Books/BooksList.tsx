import { Container } from '@mui/system';
import axios from 'axios';
import React, { useEffect } from 'react';
import type { RootState } from '@/store/store';
import { useSelector, useDispatch } from 'react-redux';

const BookList = (): JSX.Element => {
  const dispatch = useDispatch();
  const apiKey = 'AIzaSyDjUo8-f3Vxgg95FZbCYqwePsj6H9pZcIA';
  const loadBooks = async () => {
    try {
      const bookResponse = await axios.request({
        url: `https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=${apiKey}`,
        method: 'GET',
      });
      console.log(bookResponse.data);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };
  useEffect(() => {
    loadBooks();
  }, []);
  return <Container className={`booklist`}></Container>;
};

export default BookList;
