import { MovieType } from 'types/Movie';

export const setPopularMovies = (popular: MovieType[], genreId: number) => {
  return popular.filter(val => val.genre_ids.includes(genreId));
};
