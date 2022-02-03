import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import detailsReducer from './reducers';

const rootReducer = combineReducers({ detailsReducer });

export const store = createStore(rootReducer, applyMiddleware(thunk));