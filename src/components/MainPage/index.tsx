import { Movie } from 'components';
import { useEffect, useState } from 'react';
import { MovieDataType, MovieType } from 'types/Movie';
import { Header, Popular } from 'components';
import * as S from './style';

const MainPage = ({ data }: MovieDataType) => {
  const [movies, setMovies] = useState<MovieType[]>();

  useEffect(() => {
    setMovies(data?.results);
  }, []);

  return (
    <>
      <Header />
      <Popular movie={movies} />
      <S.MainSection>
        <S.MainTitle>영화 리스트</S.MainTitle>
        <S.MovieSection>
          {movies?.map(movie => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </S.MovieSection>
      </S.MainSection>
    </>
  );
};

export default MainPage;
