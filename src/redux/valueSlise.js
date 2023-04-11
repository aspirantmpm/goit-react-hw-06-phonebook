import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';

export const valueSlice = createSlice({
  name: 'value',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    add(state) {
      state.contacts = [];
      state.filter = '';
    },    
    del(state) {
      state.contacts = [];
      state.filter = '';
    },
  },
});

export const { add, del } = valueSlice.actions;

