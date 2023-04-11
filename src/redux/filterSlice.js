import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filterState: '',
  },
  reducers: {
    filterChange(filterState, action) {
      return action.payload;
    },
  },
});

export const { filterChange } = filterSlice.actions;
