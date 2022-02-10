import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthRoute, UnauthRoute } from './PrivateRouter';
import Login from '@pages/Login';
import Home from '@pages/Home';
const MainRouter = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthRoute />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/login" element={<UnauthRoute />}>
          <Route index element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
