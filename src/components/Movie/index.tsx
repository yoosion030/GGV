import Image from 'next/image';
import { MovieType } from 'types/Movie';
import * as S from './style';

interface MovieProps {
  movie: MovieType;
}

const Movie = ({ movie }: MovieProps) => {
  return (
    <S.Movie href={`movie/${movie.id}`}>
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt=""
        width={356}
        height={524}
      />
      <S.Title>{movie.title}</S.Title>
      <S.Overview>{movie.overview}</S.Overview>
    </S.Movie>
  );
};

export default Movie;
