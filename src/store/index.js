import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as helloReducer } from '../client/components/Hello/store'

const reducer = combineReducers({
  home: helloReducer
});

export const getStore = () => {
  return createStore(reducer, applyMiddleware(thunk));
}

export default createStore(reducer, applyMiddleware(thunk));

export const getClientStore = () => {
  const defaultState = window.context ? window.context.state : {};
  return createStore(reducer, defaultState, applyMiddleware(thunk));
}