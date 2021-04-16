import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger'
import { persistStore, persistCombineReducers } from 'redux-persist';
// import storage from 'redux-persist/es/storage';
import AsyncStorage from '@react-native-community/async-storage';
//ASSETS
import rootSaga from './Sagas';       // List of Sagas
import rootReducer from './Reducers'  // List of Reducers
import { sagaMonitor } from './Config';

const Reducers = persistCombineReducers({
    key: 'root',
    storage: AsyncStorage,
  }, rootReducer);

  const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
const middlewares = [];
const enhancers = [];
middlewares.push(sagaMiddleware, logger);
enhancers.push(applyMiddleware(...middlewares));

export const store = createStore(
  Reducers,
  compose(...enhancers),
)

//persistStore contains all the data from store
export const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);