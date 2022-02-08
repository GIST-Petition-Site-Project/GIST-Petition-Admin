import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { AuthRoute, UnauthRoute } from './PrivateRouter';
import Login from '@pages/Login';
const MainRouter = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthRoute />} />
        <Route path="/login" element={<UnauthRoute />}>
          <Route index element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
