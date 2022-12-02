import { useState } from 'react';
import { MovieDataPropsType, MovieType } from 'types/Movie';
import {
  Header,
  Popular,
  Toggle,
  Movie,
  Dropdown,
  Layout,
  Title,
} from 'components';
import * as S from './style';
import { useRecoilState } from 'recoil';
import { GenreId, Select } from 'atoms';
import { css } from '@emotion/react';
import { setPopularMovies } from 'hooks';

const MainPage = ({ playing, upcoming, popular }: MovieDataPropsType) => {
  const [playingMovies] = useState<MovieType[]>(playing.results);
  const [upcomingMovies] = useState<MovieType[]>(upcoming.results.reverse());
  const [select, setSelect] = useRecoilState(Select);
  const handleSelectStyle = (selectname: 'playing' | 'upcoming') =>
    selectname !== select &&
    css({
      color: '#8D8D8D',
      transition: 'color 500ms',
      cursor: 'pointer',
    });

  const [genreId] = useRecoilState(GenreId);

  return (
    <>
      <Header />
      <Popular movie={popular.results} />
      <S.MainSection>
        <S.MainHeader>
          <S.ToggleSection>
            <Title
              onClick={() => setSelect('playing')}
              style={handleSelectStyle('playing')}
            >
              상영중인 영화
            </Title>
            <Toggle />
            <Title
              onClick={() => setSelect('upcoming')}
              style={handleSelectStyle('upcoming')}
            >
              상영예정인 영화
            </Title>
          </S.ToggleSection>
          <Dropdown />
        </S.MainHeader>
        <Layout>
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
        </Layout>
      </S.MainSection>
    </>
  );
};

export default MainPage;
