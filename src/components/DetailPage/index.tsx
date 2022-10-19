import MovieDetail from 'components/MovieDetail';
import { useEffect, useState } from 'react';
import { DetailDataType, MovieDetailType } from 'types/MovieDetail';

const DetailPage = ({ data }: DetailDataType) => {
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
