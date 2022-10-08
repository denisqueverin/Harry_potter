import { combineReducers } from 'redux';
import { heroesReducer } from './heroes/reducer';

export const rootReducer = combineReducers({
    heroes: heroesReducer,
})