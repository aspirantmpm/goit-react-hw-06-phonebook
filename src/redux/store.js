import {
    configureStore,
    combineReducers
} from '@reduxjs/toolkit';
import { contactSlice } from './contactSlice';
import { filterSlice } from './filterSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'],
};

const combineReducer = combineReducers({
  contacts: contactSlice.reducer,
  filter: filterSlice.reducer,
});

const persistedReduser = persistReducer(persistConfig, combineReducer);

// const persistedFilter = persistReducer(persistConfig, filterSlice.reducer);

export const store = configureStore({
    reducer: persistedReduser,
//     {
//     contacts: contactSlice.reducer,
//     filter: filterSlice.reducer,
//   },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
