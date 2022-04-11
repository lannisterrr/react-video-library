import { useAuth } from '../contexts/auth-context';
import { Navigate, useLocation } from 'react-router-dom';

export default function RequiresAuth({ login, children }) {
  let location = useLocation();
  const { auth } = useAuth();
  return auth.isAuth ? (
    children
  ) : (
    <Navigate to="/auth" state={{ from: location }} replace />
  );
}
