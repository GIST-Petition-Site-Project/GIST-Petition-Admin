import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './authSlice';
import toastReducer from './toastSlice';
import modeReducer from './modeSlice';
import modifyReducer from './modifySlice';
import menuReducer from './menuSlice';

const reducers = combineReducers({
  auth: authReducer,
  toast: toastReducer,
  mode: modeReducer,
  modify: modifyReducer,
  menu: menuReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'mode', 'menu'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
