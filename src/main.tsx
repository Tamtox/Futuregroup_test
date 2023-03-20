import '@/styles/index.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import ErrorBoundary from '@/features/misc/error/ErrorBoundary';
import Error from '@/features/misc/error/Error';

import store from '@/store/store';

import App from '@/app';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ErrorBoundary fallback={<Error />}>
    <Provider store={store}>
      <App />
    </Provider>
  </ErrorBoundary>,
);
