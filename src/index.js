import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Providers from './Providers';
import { SnackbarProvider } from 'notistack';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <SnackbarProvider>
    <Providers>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Providers>
    </SnackbarProvider>
  </BrowserRouter>
);
