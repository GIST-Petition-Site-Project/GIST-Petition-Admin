import { createSlice } from '@reduxjs/toolkit';

type UserRole = 'NULL' | 'ADMIN' | 'MANAGER';

const initialState: { isAuthorized: boolean; role: UserRole } = {
  isAuthorized: false,
  role: 'NULL',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin: (state) => {
      state.isAuthorized = true;
    },
    setLogout: (state) => {
      state.isAuthorized = false;
    },
    setUserRoleNull: (state) => {
      state.role = 'NULL';
    },
    setUserRoleManager: (state) => {
      state.role = 'MANAGER';
    },
    setUserRoleAdmin: (state) => {
      state.role = 'ADMIN';
    },
  },
});

export const { setLogin, setLogout, setUserRoleNull, setUserRoleAdmin, setUserRoleManager } = authSlice.actions;

export default authSlice.reducer;
