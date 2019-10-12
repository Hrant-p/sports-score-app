import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers';
import {Map} from 'immutable';
import {composeWithDevTools} from "redux-devtools-extension";
import middleware from "./middlewares";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    Map(),
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(middleware);

export default store;

