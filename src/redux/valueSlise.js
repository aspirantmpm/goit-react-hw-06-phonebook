import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';

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

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    filterChange(state, action) {
      return action.payload;
    },
  },
});

export const { add, del } = contactSlice.actions;
export const { filterChange } = filterSlice.actions;
