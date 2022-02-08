import { Outlet, Navigate } from 'react-router-dom';

const auth = false;
const AuthRoute = () => {
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

const UnauthRoute = () => {
  return !auth ? <Outlet /> : <Navigate to="/" />;
};

export { AuthRoute, UnauthRoute };
