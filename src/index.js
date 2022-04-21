import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { makeServer } from './server';
import { BrowserRouter } from 'react-router-dom';
import { DataProvider } from './contexts/data-context';
import { AuthProvider } from './contexts/auth-context';
import { PlaylistProvider } from './contexts/playlist-context';
import { FilterProvider } from './contexts/filter-context';
// Call make Server
makeServer();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
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
  </React.StrictMode>
);
