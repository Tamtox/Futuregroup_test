import '@/styles/app.scss';
import '@/styles/animation.scss';
import '@/styles/global_classes.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { Container, createTheme, CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material';
import React from 'react';

const BookList = React.lazy(() => import('@/features/Books/BooksList'));
import Toolbar from '@/components/UI/Toolbar/Toolbar';

function App() {
  const myTheme = createTheme({
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            boxShadow: `0px 1px 3px ${'#000000'}`,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
          },
        },
      },
    },
    palette: {
      background: {
        default: '#FAF9F6',
        paper: '#ffffff',
      },
      primary: {
        main: '#51499f',
        light: '#EBC7E8',
        dark: '#1C3879',
        contrastText: '#fff',
      },
    },
  });
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={myTheme}>
        <CssBaseline />
        <Toolbar />
        <Container maxWidth={false} component="main" className="app">
          <div className="wrapper">
            <BookList />
          </div>
        </Container>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
