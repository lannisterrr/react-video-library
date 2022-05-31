import { Link } from 'react-router-dom';
function Error404({ children }) {
  return (
    <main>
      <span className="heading-3 t-c-3 p-4">{children}</span>
      <Link className="heading-3" to="/">
        Go to Home
      </Link>
    </main>
  );
}

export default Error404;
