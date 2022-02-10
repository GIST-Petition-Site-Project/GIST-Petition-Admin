import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  isAuthorized: false,
  role: '',
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
    setUserRole: (state, action: PayloadAction<string>) => {
      state.role = action.payload;
    },
  },
});

export const { setLogin, setLogout, setUserRole } = authSlice.actions;

export default authSlice.reducer;
