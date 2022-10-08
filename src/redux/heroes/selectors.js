import { createSelector } from "reselect";

const getHeroesState = (state) => {return state.heroes};

export const getHeroes = createSelector(getHeroesState, (heroesState) => heroesState.data);
export const getHeroesLoading = createSelector(getHeroesState, (heroesState) => heroesState.loading);
export const getSelectedHero = createSelector(getHeroesState, (heroesState) => (name) =>  heroesState.data.find(el => el.name === name));
export const getHeroesError = createSelector(getHeroesState, (heroesState) => heroesState.error);