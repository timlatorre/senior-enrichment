import { createStore, applyMiddleware } from 'redux';
import combinedReducer from './reducers';
import loggingMiddleware from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk

const store = createStore(combinedReducer, applyMiddleware(thunkMiddleware, loggingMiddleware))
export default store;