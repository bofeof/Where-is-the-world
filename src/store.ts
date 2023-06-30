import axios from 'axios';

import { combineReducers, configureStore } from '@reduxjs/toolkit';

import * as api from './config';

import { themeReducer } from './features/theme/theme-slice';
import { controlsReducer } from './features/controls/controls-slice';
import { countryReducer } from './features/countries/countries-slice.ts';
import { detailsReducer } from './features/details/details-slice';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  theme: themeReducer,
  controls: controlsReducer,
  countries: countryReducer,
  details: detailsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch