// import React from 'react';
import { GlobalStyle } from '@styles/globalStyle';
import MainRouter from '@routes/MainRouter';
import { Provider } from 'react-redux';
import { persistor, store } from '@stores/store';
import { PersistGate } from 'redux-persist/integration/react';
import Toast from '@components/Toast/Toast';
const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyle />
        <Toast />
        <MainRouter />
      </PersistGate>
    </Provider>
  );
};
export default App;
