import { configureStore } from '@reduxjs/toolkit';
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
import { registrationsReducer } from './registrationSlice';
import { eventsReducer } from './eventsSlice';
import { filterReducer } from './filterSlice';

const registrationsPersistConfig = {
  key: 'registrations',
  storage,
  whitelist: ['items'],
};

const persistedRegistrationsReducer = persistReducer(
  registrationsPersistConfig,
  registrationsReducer
);

export const store = configureStore({
  reducer: {
    registrations: persistedRegistrationsReducer,
    events: eventsReducer,
    filter: filterReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
