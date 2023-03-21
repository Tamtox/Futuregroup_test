import axios from 'axios';
import { useDispatch } from 'react-redux';
import { bookActions } from '@/store/store';
import type { IBook } from '@/types/interfaces';

const apiKey = 'AIzaSyDjUo8-f3Vxgg95FZbCYqwePsj6H9pZcIA';

const useLoadBooks = () => {
  const dispatch = useDispatch();
  const loadBooks = async (
    searchQuery: string,
    category: string,
    sortQuery: string,
    startPos: number,
    loadType: string,
  ) => {
    dispatch(bookActions.setBooksLoading({ type: loadType, loading: true }));
    try {
      const bookResponse: { data: { items: IBook[]; kind: string; totalItems: number } } = await axios.request({
        url: `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&orderBy=${sortQuery}&startIndex=${startPos}&maxResults=${30}&key=${apiKey}`,
        method: 'GET',
      });
      const { items, kind, totalItems } = bookResponse.data;
      const bookOptions = {
        totalBooks: totalItems,
        searchQuery,
        category,
        sortQuery,
        currentPosition: startPos + 30,
      };
      dispatch(
        bookActions.setBooks({
          newBooks: items,
          kind,
          bookOptions,
        }),
      );
    } catch (error) {
      axios.isAxiosError(error) ? alert(error.response?.data || error.message) : console.log(error);
    } finally {
      dispatch(bookActions.setBooksLoading({ type: loadType, loading: false }));
    }
  };
  return { loadBooks };
};

export default useLoadBooks;
