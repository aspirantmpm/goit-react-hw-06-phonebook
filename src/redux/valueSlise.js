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
      filterChange(state, action) {
        return action.payload;
    }
  },
});

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    contacts: [],
    filter: '',
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
    filterChange(state, action) {
      return action.payload;
    },
  },
});



export const { add, del, filterChange } = valueSlice.actions;
