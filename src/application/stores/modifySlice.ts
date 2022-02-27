import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModifying: false,
};

export const modifySlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onModifying: (state) => {
      state.isModifying = true;
    },
    offModiying: (state) => {
      state.isModifying = false;
    },
  },
});

export const { onModifying, offModiying } = modifySlice.actions;

export default modifySlice.reducer;
