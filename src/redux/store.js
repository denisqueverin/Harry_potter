import { applyMiddleware, createStore, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { rootReducer } from './root-reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewareEnhancer = applyMiddleware(thunkMiddleware)
const composedEnhancers = composeEnhancers(middlewareEnhancer)

export const store = createStore(rootReducer, undefined, composedEnhancers)