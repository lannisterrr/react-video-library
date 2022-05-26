import './App.css';
import { useRef, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import MockmanEs from 'mockman-js';
import { Helmet } from 'react-helmet';

import {
  Home,
  SingleVideoPage,
  PlaylistPage,
  HistoryPage,
  LikePage,
  WatchLaterPage,
  Auth,
} from './Pages';
import RequiresAuth from './components/RequiresAuth';
import { Routes, Route, useLocation } from 'react-router-dom';
import Toast from './components/Toast';
import SinglePlaylistPage from './Pages/SinglePlaylistPage';

function App() {
  const [toastData, setToastData] = useState({
    message: '',
    type: '',
  });

  const getToastProps = (message, type) => {
    setToastData(prevToastData => ({
      ...prevToastData,
      message,
      type,
    }));
  };
  const location = useLocation();
  const toastRef = useRef(null);
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Psychology Tube</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Video librarys" />
      </Helmet>
      {location.pathname !== '/auth' && <Navbar />}
      <Sidebar />
      <Toast ref={toastRef} message={toastData.message} type={toastData.type} />
      <Routes>
        <Route
          path="/"
          element={<Home toastRef={toastRef} getData={getToastProps} />}
        />
        <Route path="/mock" element={<MockmanEs />} />
        <Route
          path="/video/:videoId"
          element={
            <SingleVideoPage toastRef={toastRef} getData={getToastProps} />
          }
        />
        <Route
          path="/playlist/:playlistID"
          element={
            <RequiresAuth>
              <SinglePlaylistPage />
            </RequiresAuth>
          }
        />
        <Route
          path="/playlist"
          element={
            <RequiresAuth>
              <PlaylistPage />
            </RequiresAuth>
          }
        />
        <Route
          path="/history"
          element={
            <RequiresAuth>
              <HistoryPage toastRef={toastRef} getData={getToastProps}/>
            </RequiresAuth>
          }
        />
        <Route
          path="/liked"
          element={
            <RequiresAuth>
              <LikePage toastRef={toastRef} getData={getToastProps} />
            </RequiresAuth>
          }
        />

        <Route
          path="/watchlater"
          element={
            <RequiresAuth>
              <WatchLaterPage toastRef={toastRef} getData={getToastProps} />
            </RequiresAuth>
          }
        />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="*"
          element={
            <main>
              <p className="heading-3 t-c-3 p-4">There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
