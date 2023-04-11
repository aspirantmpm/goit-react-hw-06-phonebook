import { configureStore } from '@reduxjs/toolkit';
import { valueSlice } from './valueSlise';

export const store = configureStore({
  reducer: {
    value: valueSlice.reducer,
  },
});