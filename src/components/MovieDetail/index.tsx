import Image from 'next/image';
import { MovieDetailType } from 'types/MovieDetail';

interface DetailProps {
  movie: MovieDetailType | undefined;
}

const MovieDetail = ({ movie }: DetailProps) => {
  return (
    <div>
      <p>{movie?.title}</p>
      <p>{movie?.release_date}</p>
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
        alt=""
        width={120}
        height={120}
      />
      <a href={movie?.homepage}>{movie?.homepage}</a>
      <p>{movie?.overview}</p>
    </div>
  );
};

export default MovieDetail;
