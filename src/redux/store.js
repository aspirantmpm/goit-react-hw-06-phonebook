import { configureStore } from '@reduxjs/toolkit';
import { contactSlice, filterSlice } from './valueSlise';


export const store = configureStore({
  reducer: {
    value: contactSlice.reducer,
    filter: filterSlice.reducer,
  },
});