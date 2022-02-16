// import React from 'react';
import { GlobalStyle } from '@styles/globalStyle';
import MainRouter from '@routes/MainRouter';
import Toast from '@components/Toast/Toast';
import { getUsersMe } from '@api/userAPI';
import { useAppDispatch } from '@hooks/useStore';
import { setLogout, setUserRole } from '@stores/authSlice';
import { useEffect } from 'react';
import { dark, light } from '@styles/theme';
import { ThemeProvider } from 'styled-components';

const App = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const checkSessionValid = async () => {
    const response = await getUsersMe();
    if (response.status === 401) {
      dispatch(setLogout());
      dispatch(setUserRole(''));
    }
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
