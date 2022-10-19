import { Movie } from 'components';
import { useEffect, useState } from 'react';
import { MovieData, MovieType } from 'types/Movie';

const MainPage = ({ data }: MovieData) => {
  const [movies, setMovies] = useState<MovieType[]>();

  useEffect(() => {
    setMovies(data.results);
  }, []);

  return (
    <div>
      {movies?.map(movie => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MainPage;
