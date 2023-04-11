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
    del(state, action) {
      const index = state.contacts.findIndex(contact => contact.id === action.payload);
      state.contacts.splice(index, 1);
    },
  },
});

export const { add, del } = valueSlice.actions;
