import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthRoute, UnauthRoute, AdminRoute } from './PrivateRouter';
import NavBar from '@components/Navigation/NavBar';
import Login from '@pages/Login';
import Home from '@pages/Home';
import Role from '@pages/Role';

const MainRouter = (): JSX.Element => {
  return (
    <>
      <NavBar></NavBar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthRoute />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/login" element={<UnauthRoute />}>
            <Route index element={<Login />} />
          </Route>
          <Route path="/role" element={<AdminRoute />}>
            <Route index element={<Role />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MainRouter;
