import './Toolbar.scss';

import { useSelector } from 'react-redux';
import { useReducer } from 'react';
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  InputAdornment,
  IconButton,
  Alert,
} from '@mui/material';
import { FaSearch } from 'react-icons/fa';
import type { RootState } from '@/store/store';
import useLoadBooks from '@/hooks/useLoadBooks';

import type { IBookOptions } from '@/types/interfaces';

interface ToolbarState {
  searchQuery: string;
  category: string;
  sortQuery: string;
  error: boolean;
}

const Toolbar = (): JSX.Element => {
  const { loadBooks } = useLoadBooks();
  const bookOptions = useSelector<RootState, IBookOptions>((state) => state.bookSlice.bookOptions);
  const [state, setState] = useReducer(
    (state: ToolbarState, action: Partial<ToolbarState>) => ({ ...state, ...action }),
    {
      searchQuery: '',
      category: 'All',
      sortQuery: 'Relevance',
      error: false,
    },
  );
  const submitSearch = (event: any, submitType: string) => {
    if (submitType === 'button' || (submitType === 'key' && event.key === 'Enter')) {
      const { searchQuery, category, sortQuery } = state;
      if (searchQuery.trim().length > 0) {
        loadBooks(searchQuery, category, sortQuery, bookOptions.currentPosition, 'new');
      } else {
        setState({ error: true });
        setTimeout(() => setState({ error: false }), 3000);
      }
    }
  };
  const bookInputsHandler = async (inputType: string, newVal: string) => {
    setState({ [inputType]: newVal });
  };
  return (
    <>
      <Box className={`toolbar`}>
        <Box className={`toolbar__container`}>
          <FormControl className="toolbar__category select" size="small">
            <InputLabel id="toolbar-category-label">Book Category</InputLabel>
            <Select
              labelId="toolbar-category-label"
              value={state.category}
              onChange={(e: any) => {
                bookInputsHandler('category', e.target.value);
              }}
              size="small"
              label="Book Category"
              defaultValue="all"
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Art">Art</MenuItem>
              <MenuItem value="Biography">Biography</MenuItem>
              <MenuItem value="Computers">Computers</MenuItem>
              <MenuItem value="History">History</MenuItem>
              <MenuItem value="Medical">Medical</MenuItem>
              <MenuItem value="Poetry">Poetry</MenuItem>
            </Select>
          </FormControl>
          <TextField
            className={`toolbar__search`}
            id=""
            label="Book title"
            size="small"
            fullWidth
            error={state.error}
            value={state.searchQuery}
            onChange={(e: any) => {
              bookInputsHandler('searchQuery', e.target.value);
            }}
            onKeyDown={(e) => {
              submitSearch(e, 'key');
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    color="inherit"
                    onClick={(e) => {
                      submitSearch(e, 'button');
                    }}
                  >
                    <FaSearch />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <FormControl className="toolbar__sort select" size="small">
            <InputLabel id="toolbar-sort-label">Sort</InputLabel>
            <Select
              labelId="toolbar-sort-label"
              value={state.sortQuery}
              onChange={(e: any) => {
                bookInputsHandler('sortQuery', e.target.value);
              }}
              size="small"
              label="Sort By"
              defaultValue="relevance"
            >
              <MenuItem value="Relevance">Relevance</MenuItem>
              <MenuItem value="Newest">Newest</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
    </>
  );
};

export default Toolbar;
