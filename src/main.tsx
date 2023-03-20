import '@/styles/index.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ErrorBoundary from '@/components/error/ErrorBoundary';
import Error from '@/components/error/Error';

import store from '@/store/store';

import App from '@/app';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ErrorBoundary fallback={<Error />}>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </ErrorBoundary>,
);
