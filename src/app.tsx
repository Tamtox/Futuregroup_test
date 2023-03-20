import '@/styles/app.scss';
import '@/styles/animation.scss';
import '@/styles/global_classes.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { Container, createTheme, CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material';
import React, { Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';

const BookList = React.lazy(() => import('@/features/Books/BooksList'));
const Spinner = React.lazy(() => import('@/components/elements/Spinner/Spinner'));
import Toolbar from '@/components/UI/Toolbar/Toolbar';

function App() {
  const darkMode = false;
  const myTheme = useMemo(
    () =>
      createTheme({
        components: {
          // MuiTypography: {
          //   styleOverrides: {
          //     root: {
          //     },
          //   },
          // },
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
          mode: darkMode ? 'dark' : 'light',
          background: {
            default: darkMode ? '#000000' : '#FAF9F6',
            paper: darkMode ? '#100F0F' : '#ffffff',
          },
          // text: {
          //   primary: darkMode ? '#ffffff' : '#000000',
          //   secondary: darkMode ? '#ffffff' : '#000000',
          //   disabled: darkMode ? '#ffffff' : '#000000',
          //   // hint: darkMode ? '#ffffff' : '#000000',
          // },
          primary: {
            main: darkMode ? '#B1B2FF' : '#51499f',
            light: '#EBC7E8',
            dark: '#1C3879',
            contrastText: '#fff',
          },
          secondary: {
            main: '#ffffff',
            light: '#ba68c8',
            dark: '#7b1fa2',
            contrastText: '#fff',
          },
          // error: {},
          // warning: {},
          // info: {},
          // success: {},
          // divider: 'yellow',
        },
      }),
    [darkMode],
  );
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={myTheme}>
        <CssBaseline />
        <Toolbar />
        <Container maxWidth={false} component="main" className="app">
          <div className="wrapper">
            <Suspense fallback={<Spinner height="100vh" />}>
              <Routes>
                {/* <Route path="/" element={<Home />} /> */}
                {/* <Route path='/auth' element={isLoggedIn ? (verificationStatus === "Complete" ? <Home/> : <Profile/>) : <Auth/>} /> */}
                <Route path="*" element={<BookList />} />
              </Routes>
            </Suspense>
          </div>
        </Container>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
