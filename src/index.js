import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Providers from './Providers';
import { SnackbarProvider } from 'notistack';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Providers>
      <SnackbarProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </SnackbarProvider>
    </Providers>
  </BrowserRouter>
);
