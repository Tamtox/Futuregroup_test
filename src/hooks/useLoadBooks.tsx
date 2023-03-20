import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { bookActions } from '@/store/store';
import { IBook } from '@/types/interfaces';

const useLoadBooks = () => {
  const dispatch = useDispatch();
  const apiKey = 'AIzaSyDjUo8-f3Vxgg95FZbCYqwePsj6H9pZcIA';
  const loadBooks = async () => {
    dispatch(bookActions.setBooksLoading(true));
    try {
      const bookResponse: { data: { items: IBook[]; kind: string; totalItems: number } } = await axios.request({
        url: `https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=${apiKey}`,
        method: 'GET',
      });
      const { items, kind, totalItems } = bookResponse.data;
      dispatch(bookActions.setBooks(bookResponse.data.items));
    } catch (error) {
      axios.isAxiosError(error) ? alert(error.response?.data || error.message) : console.log(error);
    } finally {
      dispatch(bookActions.setBooksLoading(false));
    }
  };
  useEffect(() => {
    loadBooks();
  }, []);
  return;
};

export default useLoadBooks;
