import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import { contactReducer, filterReducer } from './reducer';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
});
