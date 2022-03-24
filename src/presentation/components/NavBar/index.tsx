import { postLogout } from '@api/userAPI';
import { useAppDispatch } from '@hooks/useStore';
import { useToast } from '@hooks/useToast';
import { setLogout, setUserRoleNull } from '@stores/authSlice';
import VNavBar from './VNavBar';

const NavBar = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const toast = useToast();

  const vNavBarProps = {
    handleClick: () => {
      postLogout();
      dispatch(setLogout());
      dispatch(setUserRoleNull());
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
