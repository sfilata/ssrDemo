import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  home: '123213'
});

const store = createStore(reducer, applyMiddleware(thunk));

export store;