// import React from 'react';
import { GlobalStyle } from './styles/globalStyle';
import MainRouter from '@routes/MainRouter';

const App = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <MainRouter />
    </>
  );
};
export default App;
