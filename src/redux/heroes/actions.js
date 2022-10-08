import axios from 'axios';

export const FETCH_HEROES_START = "FETCH_HEROES_START";
export const FETCH_HEROES_SUCCESS = "FETCH_HEROES_SUCCESS";
export const FETCH_HEROES_ERROR = "FETCH_HEROES_ERROR";

export const fetchHeroes = () => async (dispatch) => {
    dispatch({ type: FETCH_HEROES_START });

    try {
        const urlHeroes = 'https://hp-api.herokuapp.com/api/characters';

        const heroes = await axios.get(urlHeroes).then(res => res.data);

        dispatch({ type: FETCH_HEROES_SUCCESS, payload: heroes })
    } catch (e) {
        dispatch({ type: FETCH_HEROES_ERROR })
    }
}