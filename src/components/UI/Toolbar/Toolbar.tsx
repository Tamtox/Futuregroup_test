import './Toolbar.scss';

import React, { useReducer } from 'react';
import {
  Box,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { FaSearch } from 'react-icons/fa';
import useLoadBooks from '@/hooks/useLoadBooks';

interface ToolbarState {
  searchQuery: string;
  category: string;
  sortQuery: string;
}

const Toolbar = (): JSX.Element => {
  useLoadBooks();
  const [state, setState] = useReducer(
    (state: ToolbarState, action: Partial<ToolbarState>) => ({ ...state, ...action }),
    {
      searchQuery: '',
      category: '',
      sortQuery: '',
    },
  );
  const bookInputsHandler = async (inputType: string, newVal: string) => {
    setState({ [inputType]: newVal });
  };
  return (
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
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="art">Art</MenuItem>
            <MenuItem value="biography">Biography</MenuItem>
            <MenuItem value="computers">Computers</MenuItem>
            <MenuItem value="history">History</MenuItem>
            <MenuItem value="medical">Medical</MenuItem>
            <MenuItem value="poetry">Poetry</MenuItem>
          </Select>
        </FormControl>
        <TextField
          className={`toolbar__search`}
          id=""
          label="Book title"
          size="small"
          fullWidth
          value={state.searchQuery}
          onChange={(e: any) => {
            bookInputsHandler('searchQuery', e.target.value);
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  color="inherit"
                  onClick={() => {
                    console.log(123);
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
            <MenuItem value="relevance">Relevance</MenuItem>
            <MenuItem value="dateDesc">Newest</MenuItem>
            <MenuItem value="dateAsc">Oldest</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Toolbar;
