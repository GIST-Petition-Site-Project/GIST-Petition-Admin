import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthRoute, UnauthRoute, AdminRoute, ManagerRoute } from './PrivateRouter';
import NavBar from '@components/Navigation';
import Login from '@pages/Login';
import Home from '@pages/Home';
import Role from '@pages/Role';
import Answer from '@pages/Answer';
import WriteAnswer from '@components/WriteAnswer';

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
          <Route path="/answer" element={<ManagerRoute />}>
            <Route index element={<Answer />} />
            <Route path=":petitionId" element={<WriteAnswer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MainRouter;
