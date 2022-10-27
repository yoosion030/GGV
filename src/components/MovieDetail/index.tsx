import Image from 'next/image';
import { MovieDetailType } from 'types/MovieDetail';
import * as S from './style';

interface DetailProps {
  movie: MovieDetailType | undefined;
}

const MovieDetail = ({ movie }: DetailProps) => {
  return (
    <S.MovieSection>
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
        alt=""
        width={350}
        height={510}
      />
      <div>
        <S.Title>{movie?.title}</S.Title>
        <S.TextSection>
          <S.SubTitle>개봉일</S.SubTitle>
          <S.MovieInfoText>{movie?.release_date}</S.MovieInfoText>
        </S.TextSection>
        <a href={movie?.homepage}>{movie?.homepage}</a>
      </div>
    </S.MovieSection>
  );
};

export default MovieDetail;
