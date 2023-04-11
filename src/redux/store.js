import { configureStore } from '@reduxjs/toolkit';
import { contactSlice } from './contactSlice';
import { filterSlice } from './filterSlice';

// const combineReducer = combineReducers({
//   contacts: contactSlice.reducer,
//   filter: filterSlice.reducer,
// });

export const store = configureStore({
  reducer: {
    contacts: contactSlice.reducer,
    filter: filterSlice.reducer,
  },
});
