import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthRoute } from './PrivateRouter';
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
import ScrollTop from './ScrollTop';
import Rejected from '@pages/Rejected';

const MainRouter = (): JSX.Element => {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<AuthRoute type="AUTH" />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/role" element={<AuthRoute type="ADMIN" />}>
            <Route index element={<Role />} />
          </Route>
          <Route path="/modify" element={<AuthRoute type="MANAGER" />}>
            <Route path=":petitionId" element={<ModifyPetition />} />
          </Route>
          {/* <Route path="/rejected" element={<AuthRoute type="MANAGER" />}>
            <Route index element={<Rejected />} />
            <Route path=":petitionId" element={<ApprovePetition />} />
          </Route> */}
          <Route path="/revision" element={<AuthRoute type="MANAGER" />}>
            <Route path=":petitionId" element={<Revision />} />
          </Route>
          <Route path="/answer" element={<AuthRoute type="MANAGER" />}>
            <Route index element={<Answer />} />
            <Route path=":petitionId" element={<AnswerPetition />} />
          </Route>
          <Route path="/approve" element={<AuthRoute type="MANAGER" />}>
            <Route index element={<Approve />} />
            <Route path=":petitionId" element={<ApprovePetition />} />
          </Route>
          <Route path="/manage" element={<AuthRoute type="MANAGER" />}>
            <Route index element={<Manage />} />
            <Route path=":petitionId" element={<ManagePetition />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MainRouter;
