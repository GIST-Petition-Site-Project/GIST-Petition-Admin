import { useAppSelect } from '@hooks/useStore';
import { Outlet, Navigate } from 'react-router-dom';

const AuthRoute = () => {
  const isAuthorized = useAppSelect((select) => select.auth.isAuthorized);
  return isAuthorized ? <Outlet /> : <Navigate to="/login" />;
};

const UnauthRoute = () => {
  const isAuthorized = useAppSelect((select) => select.auth.isAuthorized);
  return !isAuthorized ? <Outlet /> : <Navigate to="/" />;
};

const AdminRoute = () => {
  const role = useAppSelect((select) => select.auth.role);
  return role === 'ADMIN' ? <Outlet /> : <Navigate to="/" />;
};

const ManagerRoute = () => {
  const role = useAppSelect((select) => select.auth.role);
  return role === 'MANAGER' ? <Outlet /> : <Navigate to="/" />;
};

export { AuthRoute, UnauthRoute, AdminRoute, ManagerRoute };
