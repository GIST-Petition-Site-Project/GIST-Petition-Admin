import { useAppSelect } from '@hooks/store.hooks';
import { Outlet, Navigate } from 'react-router-dom';

const AuthRoute = () => {
  const isAuthorized = useAppSelect((select) => select.auth.isAuthorized);
  return isAuthorized ? <Outlet /> : <Navigate to="/login" />;
};

const UnauthRoute = () => {
  const isAuthorized = useAppSelect((select) => select.auth.isAuthorized);
  return !isAuthorized ? <Outlet /> : <Navigate to="/" />;
};

export { AuthRoute, UnauthRoute };
