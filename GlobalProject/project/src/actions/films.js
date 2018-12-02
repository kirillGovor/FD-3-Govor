import films from "../redusers/films";

export const setFilms = (films) => ({
    type: 'SET_FILMS',
    payload:films,
});