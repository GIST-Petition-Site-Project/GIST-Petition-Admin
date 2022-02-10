import { useAppDispatch, useAppSelect } from '@hooks/store.hooks';
import { setLogout } from '@stores/authSlice';

const NavBar = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const role = useAppSelect((select) => select.auth.role);
  const handleClick = () => {
    dispatch(setLogout());
  };
  return (
    <>
      <p>{role}님 환영합니다</p>
      <button onClick={handleClick}>Logout</button>
    </>
  );
};

export default NavBar;
