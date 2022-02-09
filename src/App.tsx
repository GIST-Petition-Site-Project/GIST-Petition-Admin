// import React from 'react';
import { GlobalStyle } from './styles/globalStyle';
import MainRouter from '@routes/MainRouter';
import { Provider } from 'react-redux';
import { store } from '@stores/store';
const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <MainRouter />
    </Provider>
  );
};
export default App;
