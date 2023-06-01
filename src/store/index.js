import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import axios from 'axios';

import storage from 'redux-persist/lib/storage'; //local browser storage
import { persistStore, persistReducer } from 'redux-persist';

import { rootReducer } from './root-reducer';
import * as api from '../config';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
  persistedReducer,
  composeWithDevTools(
    applyMiddleware(
      thunk.withExtraArgument({
        client: axios,
        api,
      })
    )
  )
);

export { store };
export const persistor = persistStore(store)
