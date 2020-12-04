import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './ducks/index';
import { watchTypes, watchGames } from './sagas';

const saga = createSagaMiddleware();

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

// const rootReducer = combineReducers({
// 	type: typesReducer,
// 	filter: filterReducer,
// 	game: gamesReducer,
// });

export const store = createStore(reducers, composeEnhancers(applyMiddleware(saga)));

saga.run(watchTypes);
saga.run(watchGames);

export default store;
