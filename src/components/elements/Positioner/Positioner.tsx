import './Positioner.scss';

import { Box, Fab } from '@mui/material';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const Positioner = () => {
  const goTo = (direction: string) => {
    window.scrollTo({
      top: direction === 'top' ? 0 : document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };
  return (
    <Box className="positioner">
      <Fab
        className="positioner__button"
        color="primary"
        aria-label="add"
        onClick={() => {
          goTo('top');
        }}
      >
        <FaArrowUp className="icon" />
      </Fab>
      <Fab
        className="positioner__button"
        color="primary"
        aria-label="add"
        onClick={() => {
          goTo('bottom');
        }}
      >
        <FaArrowDown className="icon" />
      </Fab>
    </Box>
  );
};

export default Positioner;
