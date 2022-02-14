// import React from 'react';
import { GlobalStyle } from '@styles/globalStyle';
import MainRouter from '@routes/MainRouter';
import Toast from '@components/Toast/Toast';
import getUsersMe from '@api/getUsersMe';
import { useAppDispatch } from '@hooks/useStore';
import { setLogout } from '@stores/authSlice';
import { useEffect } from 'react';

const App = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const checkSessionValid = async () => {
    const response = await getUsersMe();
    if (response.status === 401) dispatch(setLogout());
  };
  useEffect(() => {
    checkSessionValid();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Toast />
      <MainRouter />
    </>
  );
};
export default App;
