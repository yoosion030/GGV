import { MovieType } from 'types/Movie';

interface MovieDataPropsType {
  results: MovieType[];
}

export const setPopularMovies = (
  popular: MovieDataPropsType,
  genreId: number,
) => {
  return popular.results.filter(val => val.genre_ids.includes(genreId));
};
