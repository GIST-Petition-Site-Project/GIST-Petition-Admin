import { createSlice } from '@reduxjs/toolkit';

const initialState: { type: Menu } = {
  type: 'manage',
};

export const menuSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setManage: (state) => {
      state.type = 'manage';
    },
    setApprove: (state) => {
      state.type = 'approve';
    },
    setAnswer: (state) => {
      state.type = 'answer';
    },
    setUser: (state) => {
      state.type = 'user';
    },
  },
});

export const { setManage, setApprove, setAnswer, setUser } = menuSlice.actions;

export default menuSlice.reducer;
