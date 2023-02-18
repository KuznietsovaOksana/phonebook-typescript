import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IContact {
  name: string;
  number: string;
  id: string;
}

interface ContactsState {
  items: IContact[];
}

const contactsInitialState: ContactsState = {
  items: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact(state, action: PayloadAction<IContact>) {
      state.items = [...state.items, action.payload];
    },
    deleteContact(state, action: PayloadAction<string>) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
