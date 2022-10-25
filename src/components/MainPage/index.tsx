import { Movie } from 'components';
import { useEffect, useState } from 'react';
import { MovieDataType, MovieType } from 'types/Movie';
import { Header } from 'components';

const MainPage = ({ data }: MovieDataType) => {
  const [movies, setMovies] = useState<MovieType[]>();

  useEffect(() => {
    setMovies(data.results);
  }, []);

  return (
    <div>
      <Header />
      {movies?.map(movie => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MainPage;
