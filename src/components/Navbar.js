import { ResponsiveSearchBar } from './ResponsiveSearchBar';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/auth-context';
function Navbar() {
  const { auth } = useAuth();
  const navigate = useNavigate();
  return (
    <header className="video-lib__main-head z-index-md">
      <nav className="video-lib__main-nav">
        <ResponsiveSearchBar />
        {auth.isAuth ? (
          <span
            onClick={() => alert('log out')}
            className="video-lib__btn-signIn p-4"
          >
            <i class="fa-solid fa-power-off t-c-3 signIn-icon"></i>
          </span>
        ) : (
          <span
            onClick={() => navigate('/auth')}
            className="video-lib__btn-signIn p-4"
          >
            <i class="fa-solid fa-right-to-bracket t-c-3 signIn-icon"></i>
          </span>
        )}
      </nav>
    </header>
  );
}

export { Navbar };
