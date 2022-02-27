import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthRoute, UnauthRoute, AdminRoute, ManagerRoute } from './PrivateRouter';
import NavBar from '@components/NavBar';
import Login from '@pages/Login';
import Home from '@pages/Home';
import Role from '@pages/Role';
import Answer from '@pages/Answer';
import ModifyPetition from '@components/ModifyPetition';
import Approve from '@pages/Approve';
import ApprovePetition from '@pages/ApprovePetition';
import Manage from '@pages/Manage';
import ManagePetition from '@pages/ManagePetition';
import AnswerPetition from '@pages/AnswerPetition';
import Revision from '@components/Revision';

const MainRouter = (): JSX.Element => {
  return (
    <>
      <NavBar />
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
          <Route path="/modify" element={<ManagerRoute />}>
            <Route path=":petitionId" element={<ModifyPetition />} />
          </Route>
          <Route path="/revision" element={<ManagerRoute />}>
            <Route path=":petitionId" element={<Revision />} />
          </Route>
          <Route path="/answer" element={<ManagerRoute />}>
            <Route index element={<Answer />} />
            <Route path=":petitionId" element={<AnswerPetition />} />
          </Route>
          <Route path="/approve" element={<ManagerRoute />}>
            <Route index element={<Approve />} />
            <Route path=":petitionId" element={<ApprovePetition />} />
          </Route>
          <Route path="/manage" element={<ManagerRoute />}>
            <Route index element={<Manage />} />
            <Route path=":petitionId" element={<ManagePetition />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MainRouter;
