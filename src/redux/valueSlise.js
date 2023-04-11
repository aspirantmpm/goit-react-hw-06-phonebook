import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';

export const valueSlice = createSlice({
  name: 'value',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    add(state, action) {
      state.contacts.push(action.payload);
    },
  },
});

export const { add, del } = valueSlice.actions;
