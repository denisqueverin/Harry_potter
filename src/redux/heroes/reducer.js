import { FETCH_HEROES_START, FETCH_HEROES_SUCCESS, FETCH_HEROES_ERROR } from './actions';

const initialState = {
    data: [],
    loading: false,
    error: false,
}

export const heroesReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_HEROES_START:
            return {
                ...state,
                loading: true
            }
        case FETCH_HEROES_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false
            }
        case FETCH_HEROES_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            }
        default:
            return state
    }
}