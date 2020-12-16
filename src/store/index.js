import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './ducks/index';
import { watchTypes } from './sagas';

const saga = createSagaMiddleware();

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

export const store = createStore(reducers, composeEnhancers(applyMiddleware(saga)));

saga.run(watchTypes);

export default store;
