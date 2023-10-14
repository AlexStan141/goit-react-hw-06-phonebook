// import { addContact, deleteContact, setContactFilter } from './actions';
// import { createReducer } from '@reduxjs/toolkit';

// const contactsInitialState = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

// export const contactReducer = createReducer(contactsInitialState, {
//   [addContact]: (state, action) => {
//     var existingNames = state.map(contact => contact.name);
//     var nameExists = existingNames.includes(action.payload.name);
//     return !nameExists ? [...state, action.payload] : state;
//   },
//   [deleteContact]: (state, action) => {
//     return state.filter(element => element.id !== action.payload);
//   },
// });

// const filterInitialState = '';

// export const filterReducer = createReducer(filterInitialState, {
//   [setContactFilter]: (state, action) => {
//     return action.payload;
//   },
// });
