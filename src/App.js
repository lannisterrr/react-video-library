import './App.css';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import MockmanEs from 'mockman-js';
import Home from './Pages/Home';
import SingleVideoPage from './Pages/SingleVideoPage';
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
