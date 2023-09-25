import { Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = () => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return <Outlet />;
  } else {
    window.location.href = '/login';
    return null;
  }
};

export default ProtectedRoute;
