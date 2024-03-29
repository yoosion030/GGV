import { css } from '@emotion/react';
import { Header, MovieDetail, SimilarMovie, Title, Layout } from 'components';
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
          <Title>비슷한 영화</Title>
          <Layout>
            <SimilarMovie id={data.id} />
          </Layout>
        </S.SimilarSection>
        <S.Blur
          css={css`
            background-image: url('https://image.tmdb.org/t/p/w500${movie?.poster_path}');
            opacity: 0.3;
            z-index: -1;
            filter: blur(30px);
          `}
        />
      </S.DetailSection>
    </>
  );
};

export default DetailPage;
