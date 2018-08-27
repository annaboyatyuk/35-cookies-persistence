import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

import logger from './redux-logger';
import loginReducer from './login';
import thingReducer from './thing';
import shoeReducer from './shoe';

const appReducer = combineReducers({thingState: thingReducer, shoeState : shoeReducer, loginState: loginReducer});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(appReducer, composeEnhancers(applyMiddleware(thunk, logger)));