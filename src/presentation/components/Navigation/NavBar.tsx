import { useAppDispatch, useAppSelect } from '@hooks/store.hooks';
import { setLogout } from '@stores/authSlice';
import { VAC } from 'react-vac';
import VNavBar from './VNavBar';

const NavBar = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const role = useAppSelect((select) => select.auth.role);

  const vNavBarProps = {
    role,
    handleClick: () => {
      dispatch(setLogout());
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
