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
    // Set current search position to 0 on new search
    if (loadType === 'new') {
      startPos = 0;
    }
    // format search and category queries
    const searchFilter = searchQuery.trim().split(' ').join('+');
    const categoryFilter = category !== 'All' ? `+subject:${category}` : '';
    dispatch(bookActions.setBooksLoading({ type: loadType, loading: true }));
    try {
      const bookResponse: { data: { items: IBook[]; kind: string; totalItems: number } } = await axios.request({
        url: `https://www.googleapis.com/books/v1/volumes?q=${searchFilter}${categoryFilter}&orderBy=${sortQuery}&startIndex=${startPos}&maxResults=${30}&key=${apiKey}`,
        method: 'GET',
      });
      const { items, totalItems } = bookResponse.data;
      const bookOptions = {
        totalBooks: totalItems,
        searchQuery,
        category,
        sortQuery,
        currentPosition: startPos + 30,
      };
      if (loadType === 'new') {
        dispatch(bookActions.setBooks({ newBooks: items, bookOptions }));
      } else {
        dispatch(bookActions.addBooks({ newBooks: items }));
      }
    } catch (error) {
      axios.isAxiosError(error) ? alert(error.response?.data || error.message) : console.log(error);
    } finally {
      dispatch(bookActions.setBooksLoading({ type: loadType, loading: false }));
    }
  };
  return { loadBooks };
};

export default useLoadBooks;
