import { useState } from 'react';
import { MovieDataPropsType, MovieType } from 'types/Movie';
import { Header, Popular, Toggle, Movie } from 'components';
import * as S from './style';
import { useRecoilState } from 'recoil';
import { Select } from 'atoms';
import { css } from '@emotion/react';

const MainPage = ({ playing, upcoming }: MovieDataPropsType) => {
  const [playingMovies] = useState<MovieType[]>(playing.results);
  const [upcomingMovies] = useState<MovieType[]>(upcoming.results);
  const [select, setSelect] = useRecoilState(Select);
  const handleSelectStyle = (selectname: 'playing' | 'upcoming') =>
    selectname !== select &&
    css({
      color: '#8D8D8D',
      transition: '500ms',
    });
  return (
    <>
      <Header />
      <Popular movie={playingMovies} />
      <S.MainSection>
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
        <S.MovieSection>
          {select === 'playing'
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
