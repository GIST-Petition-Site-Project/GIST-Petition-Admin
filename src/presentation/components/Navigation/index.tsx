import postLogout from '@api/postLogout';
import { useAppDispatch, useAppSelect } from '@hooks/useStore';
import { useToast } from '@hooks/useToast';
import { setLogout, setUserRole } from '@stores/authSlice';
// import { VAC } from 'react-vac';
import VNavBar from './VNavBar';

const NavBar = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const role = useAppSelect((select) => select.auth.role);
  const toast = useToast();

  const vNavBarProps = {
    role,
    handleClick: () => {
      postLogout();
      dispatch(setLogout());
      dispatch(setUserRole(''));
      toast({ message: '로그아웃 되었습니다', type: 'success' });
    },
  };

  return (
    <>
      {/* <VAC name="NavBar" data={vNavBarProps} /> */}
      <VNavBar {...vNavBarProps} />
    </>
  );
};

export default NavBar;
