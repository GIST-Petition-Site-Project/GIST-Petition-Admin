// import React from 'react';
import { GlobalStyle } from './styles/globalStyle';
import MainRouter from '@routes/MainRouter';
import { Provider } from 'react-redux';
import { persistor, store } from '@stores/store';
import { PersistGate } from 'redux-persist/integration/react';
const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyle />
        <MainRouter />
      </PersistGate>
    </Provider>
  );
};
export default App;
