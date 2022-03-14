import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLightMode: false,
};

export const modeSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.isLightMode = !state.isLightMode;
    },
  },
});

export const { toggleMode } = modeSlice.actions;

export default modeSlice.reducer;
