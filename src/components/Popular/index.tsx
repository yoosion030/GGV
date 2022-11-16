import Image from 'next/image';
import { MovieType } from 'types/Movie';
import * as S from './style';

interface MovieProps {
  movie?: MovieType[];
}

const Popular = ({ movie }: MovieProps) => {
  return (
    <S.Background>
      <S.Blur />
      {movie && (
        <S.PopularSection>
          <S.BestPoster href={`/movie/${movie[0].id}`}>
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie[0].poster_path}`}
              layout="fill"
              alt=""
            />
            <S.BestIcon>Best</S.BestIcon>
            <S.Number>1</S.Number>
          </S.BestPoster>
          <S.InfoSection>
            <S.BestTitle>{movie[0].title}</S.BestTitle>
            <hr />
            <S.BestOverview>{movie[0].overview}</S.BestOverview>
            <S.ListSection>
              {[1, 2, 3].map((value, i) => (
                <S.Movie href={`/movie/${movie[value].id}`} key={value}>
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${movie[value].poster_path}`}
                    layout="fill"
                    alt=""
                  />
                  <S.Number>{value + 1}</S.Number>
                </S.Movie>
              ))}
            </S.ListSection>
          </S.InfoSection>
        </S.PopularSection>
      )}
    </S.Background>
  );
};

export default Popular;
