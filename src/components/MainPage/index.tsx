import { useState } from 'react';
import { MovieDataPropsType, MovieType } from 'types/Movie';
import { Header, Popular, Toggle, Movie, Dropdown } from 'components';
import * as S from './style';
import { useRecoilState } from 'recoil';
import { GenreId, Select } from 'atoms';
import { css } from '@emotion/react';
import { setPopularMovies } from 'hooks';

const MainPage = ({ playing, upcoming }: MovieDataPropsType) => {
  const [playingMovies] = useState<MovieType[]>(playing.results);
  const [upcomingMovies] = useState<MovieType[]>(upcoming.results.reverse());
  const [select, setSelect] = useRecoilState(Select);
  const handleSelectStyle = (selectname: 'playing' | 'upcoming') =>
    selectname !== select &&
    css({
      color: '#8D8D8D',
      transition: '500ms',
    });

  const [genreId, setGenreId] = useRecoilState(GenreId);

  return (
    <>
      <Header />
      <Popular movie={playingMovies} />
      <S.MainSection>
        <S.MainHeader>
          <S.ToggleSection>
            <S.MainTitle
              onClick={() => setSelect('playing')}
              css={handleSelectStyle('playing')}
            >
              상영중인 영화
            </S.MainTitle>
            <Toggle />
            <S.MainTitle
              onClick={() => setSelect('upcoming')}
              css={handleSelectStyle('upcoming')}
            >
              상영예정인 영화
            </S.MainTitle>
          </S.ToggleSection>
          <Dropdown />
        </S.MainHeader>
        <S.MovieSection>
          {genreId
            ? genreId &&
              setPopularMovies(
                select === 'playing' ? playing : upcoming,
                genreId,
              ).map((movie, i) => <Movie key={movie.id} movie={movie} />)
            : select === 'playing'
            ? playingMovies?.map(movie => (
                <Movie key={movie.id} movie={movie} />
              ))
            : upcomingMovies?.map(movie => (
                <Movie key={movie.id} movie={movie} />
              ))}
        </S.MovieSection>
      </S.MainSection>
    </>
  );
};

export default MainPage;
