import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {logger} from 'redux-logger';
import {root} from './roootReducer';
import rootSaga from './watcher';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
const key = 'data0324';

const config = {
  key,
  storage: AsyncStorage,
  whitelist: ['reposState', 'authState'],
};
const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(config, root);

export const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware, logger),
);
export const persistor = persistStore(store);
export const action = (type) => store.dispatch({type});
sagaMiddleware.run(rootSaga);
