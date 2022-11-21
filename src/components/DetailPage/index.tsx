import { css } from '@emotion/react';
import { Header, MovieDetail, SimilarMovie } from 'components';
import { useState } from 'react';
import { MovieDetailDataType, MovieDetailType } from 'types/MovieDetail';
import * as S from './style';

const DetailPage = ({ data }: MovieDetailDataType) => {
  const [movie] = useState<MovieDetailType>(data);

  return (
    <>
      <Header />
      <S.DetailSection>
        <MovieDetail movie={movie} />
        <S.SimilarSection>
          <S.SimilarTitle>비슷한 영화</S.SimilarTitle>
          <S.SimilarMovieSection>
            <SimilarMovie id={data.id} />
          </S.SimilarMovieSection>
        </S.SimilarSection>
        <S.Blur />
        <S.BackgroundImage
          css={css`
            background-image: url('https://image.tmdb.org/t/p/w500${movie?.poster_path}');
          `}
        />
      </S.DetailSection>
    </>
  );
};

export default DetailPage;
