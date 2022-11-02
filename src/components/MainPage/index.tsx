import { Movie } from 'components';
import { useEffect, useState } from 'react';
import { MovieDataPropsType, MovieType } from 'types/Movie';
import { Header, Popular } from 'components';
import * as S from './style';

const MainPage = ({ playing, upcoming }: MovieDataPropsType) => {
  const [playingMovies, setPlayingMovies] = useState<MovieType[]>(
    playing.results,
  );
  const [upcomingMovies, setUpcomingMovies] = useState<MovieType[]>(
    upcoming.results,
  );
  const [select, setSelect] = useState();

  return (
    <>
      <Header />
      <Popular movie={playingMovies} />
      <S.MainSection>
        <S.ToggleSection>
          <S.MainTitle>상영중인 영화</S.MainTitle>
          <S.MainTitle>상영예정인 영화</S.MainTitle>
        </S.ToggleSection>
        <S.MovieSection>
          {upcomingMovies?.map(movie => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </S.MovieSection>
      </S.MainSection>
    </>
  );
};

export default MainPage;
