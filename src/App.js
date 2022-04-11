import './App.css';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import MockmanEs from 'mockman-js';
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
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mock" element={<MockmanEs />} />
        <Route path="/video/:videoId" element={<SingleVideoPage />} />
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
              <HistoryPage />
            </RequiresAuth>
          }
        />
        <Route
          path="/liked"
          element={
            <RequiresAuth>
              <LikePage />
            </RequiresAuth>
          }
        />
        <Route
          path="/watchlater"
          element={
            <RequiresAuth>
              <WatchLaterPage />
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
