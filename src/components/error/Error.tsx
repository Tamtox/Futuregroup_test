
import { Container, Typography } from '@mui/material';
import './Error.scss';

const Error = (): JSX.Element => {
  return (
    <Container className="error">
      <Typography variant='h1' >Error</Typography>
    </Container>
  );
};

export default Error;