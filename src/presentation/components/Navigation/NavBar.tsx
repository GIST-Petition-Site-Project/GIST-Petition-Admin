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
      {' '}
      <h1>{{ role }}님 환영합니다</h1>
      <button onClick={handleClick}></button>
    </>
  );
};

export default NavBar;
