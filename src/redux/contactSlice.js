import { createSlice } from '@reduxjs/toolkit';

export const contactSlice = createSlice({
  name: 'value',
  initialState: {
    contacts: [],
  },
  reducers: {
    add(state, action) {
      state.contacts.push(action.payload);
    },
    del(state, action) {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
  },
});

export const { add, del } = contactSlice.actions;

