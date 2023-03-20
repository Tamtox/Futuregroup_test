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

interface ToolbarState {}

const Toolbar = (): JSX.Element => {
  const [state, setState] = useReducer(
    (state: ToolbarState, action: Partial<ToolbarState>) => ({ ...state, ...action }),
    {},
  );
  const bookSearchHandler = async (searchQuery: string, category: string) => {};
  return (
    <Box className={`toolbar`}>
      <Box className={`toolbar__container`}>
        <FormControl className="toolbar__category select" size="small">
          <InputLabel id="toolbar-category-label">Book Category</InputLabel>
          <Select
            labelId="toolbar-category-label"
            // value={queries.sortQuery}
            // onChange={(event) => {
            //   sortQueryHandler(event.target.value);
            // }}
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
          // value={}
          // onChange={}
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
            // value={queries.sortQuery}
            // onChange={(event) => {
            //   sortQueryHandler(event.target.value);
            // }}
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
