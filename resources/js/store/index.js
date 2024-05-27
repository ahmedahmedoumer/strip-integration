import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import counterReducer from './reducers/counterReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  // other reducers if you have
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;