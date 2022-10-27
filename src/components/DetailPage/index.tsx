import { css } from '@emotion/react';
import { Header, MovieDetail, SimilarMovie } from 'components';
import { useEffect, useState } from 'react';
import { DetailDataType, MovieDetailType } from 'types/MovieDetail';
import * as S from './style';

const DetailPage = ({ data }: DetailDataType) => {
  const [movie, setMovie] = useState<MovieDetailType>();

  useEffect(() => {
    setMovie(data);
  }, []);

  return (
    <>
      <Header />
      <S.Background
        css={css`
          background-image: url('https://image.tmdb.org/t/p/w500${movie?.poster_path}');
        `}
      >
        <MovieDetail movie={movie} />
        <S.SimilarSection>
          <S.SimilarTitle>비슷한 영화</S.SimilarTitle>
          <S.SimilarMovieSection>
            <SimilarMovie id={data.id} />
          </S.SimilarMovieSection>
        </S.SimilarSection>
        <S.Blur />
      </S.Background>
    </>
  );
};

export default DetailPage;
