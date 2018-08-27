import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

import logger from './redux-logger';
import loginReducer from './login';
import thingReducer from './thing';

const appReducer = combineReducers({thingState: thingReducer, loginState: loginReducer});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(appReducer, composeEnhancers(applyMiddleware(thunk, logger)));