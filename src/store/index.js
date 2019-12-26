/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import sagas from './sagas';
import { appReducer as app } from './ducks';

const rootReducer = combineReducers({ app });

const sagaMiddleware = createSagaMiddleware();

const composer =
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(sagaMiddleware))
    : compose(applyMiddleware(sagaMiddleware));

const store = createStore(rootReducer, composer);

sagaMiddleware.run(sagas);

export default store;
