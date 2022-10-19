import MovieDetail from 'components/MovieDetail';
import { useEffect, useState } from 'react';
import { DetailData, MovieDetailType } from 'types/MovieDetail';

const DetailPage = ({ data }: DetailData) => {
  const [movie, setMovie] = useState<MovieDetailType>();

  useEffect(() => {
    setMovie(data);
  }, []);

  return (
    <div>
      <MovieDetail movie={movie} />
    </div>
  );
};

export default DetailPage;
