import React from 'react';
import ReactDOM from 'react-dom';
// import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { makeServer } from './server';
import { BrowserRouter } from 'react-router-dom';
import { DataProvider } from './contexts/data-context';
import { AuthProvider } from './contexts/auth-context';
import { PlaylistProvider } from './contexts/playlist-context';
import { FilterProvider } from './contexts/filter-context';
makeServer();
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DataProvider>
        <AuthProvider>
          <PlaylistProvider>
            <FilterProvider>
              <App />
            </FilterProvider>
          </PlaylistProvider>
        </AuthProvider>
      </DataProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
