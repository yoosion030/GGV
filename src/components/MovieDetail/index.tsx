import { MovieType } from 'types/Movie';
import { MovieDetail } from 'types/MovieDetail';

interface DetailProps {
  movie: MovieDetail;
}
const MovieDetail = ({ movie }: DetailProps) => {
  return <div>{movie?.title}</div>;
};

export default MovieDetail;
