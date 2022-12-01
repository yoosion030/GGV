import { css } from '@emotion/react';
import { Title } from 'components';
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
            <Title
              style={css`
                font-size: 40px;
              `}
            >
              {movie[0].title}
            </Title>
            <hr />
            <S.BestOverview>{movie[0].overview}</S.BestOverview>
            <S.ListSection>
              {[...Array(3)].map((_, i) => (
                <S.Movie href={`/movie/${movie[i + 1].id}`} key={i + 1}>
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${
                      movie[i + 1].poster_path
                    }`}
                    layout="fill"
                    alt=""
                  />
                  <S.Number>{i + 2}</S.Number>
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
