import { ResponsiveSearchBar } from './ResponsiveSearchBar';

function Navbar() {
  return (
    <header className="video-lib__main-head">
      <nav className="video-lib__main-nav">
        <ResponsiveSearchBar />
        <span className="video-lib__btn-signIn p-4">
          <i class="fa-solid fa-right-to-bracket t-c-3 signIn-icon"></i>
        </span>
      </nav>
    </header>
  );
}

export { Navbar };
