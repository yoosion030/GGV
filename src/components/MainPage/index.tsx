import { useCallback, useEffect, useRef, useState } from 'react';
import { MovieDataPropsType, MovieDataType, MovieType } from 'types/Movie';
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
import axios from 'axios';
import { SelectType } from 'types/Select';

const MainPage = ({ playing, upcoming, popular }: MovieDataPropsType) => {
  const [select, setSelect] = useRecoilState(Select);
  const handleSelectStyle = (selectname: SelectType) =>
    selectname !== select &&
    css({
      color: '#8D8D8D',
      transition: 'color 500ms',
      cursor: 'pointer',
    });

  const [genreId] = useRecoilState(GenreId);

  const [playingMovies, setPlayingMovies] = useState<MovieType[]>(playing);
  const [upcomingMovies, setUpcomingMovies] = useState<MovieType[]>(
    upcoming.reverse(),
  );

  const playingPageNumber = useRef<number>(2);
  const upcomingPageNumber = useRef<number>(2);

  const getPlayingMovies = useCallback(async () => {
    try {
      const { data }: MovieDataType = await axios.get(
        `${process.env.BASE_URL}/now_playing/?api_key=${process.env.API_KEY}&page=${playingPageNumber.current}`,
      );

      setPlayingMovies((prevMovies: MovieType[]) => [
        ...prevMovies,
        ...data.results,
      ]);

      playingPageNumber.current += 1;
    } catch (e: any) {
      console.log(e);
    }
  }, []);

  const getUpcomingMovies = useCallback(async () => {
    try {
      const { data }: MovieDataType = await axios.get(
        `${process.env.BASE_URL}/upcoming/?api_key=${process.env.API_KEY}&page=${upcomingPageNumber.current}`,
      );

      setUpcomingMovies((prevMovies: MovieType[]) => [
        ...prevMovies,
        ...data.results,
      ]);

      upcomingPageNumber.current += 1;
    } catch (e: any) {
      console.log(e);
    }
  }, []);

  const lastPlayingMovieElementRef = useRef<HTMLDivElement>(null);
  const lastUpcomingMovieElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!lastPlayingMovieElementRef.current || playingMovies.length >= 100)
      return;

    const io = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) {
        getPlayingMovies();
      }
    });

    io.observe(lastPlayingMovieElementRef.current);
    return () => io.disconnect();
  }, [getPlayingMovies, select, playingMovies.length]);

  useEffect(() => {
    if (!lastUpcomingMovieElementRef.current || upcomingMovies.length >= 100)
      return;

    const io = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) {
        getUpcomingMovies();
      }
    });

    io.observe(lastUpcomingMovieElementRef.current);
    return () => io.disconnect();
  }, [getUpcomingMovies, select, upcomingMovies.length]);

  return (
    <>
      <Header />
      <Popular movie={popular} />
      <S.MainSection>
        <S.MainHeader>
          <S.ToggleSection>
            <Title
              onClick={() => setSelect('now_playing')}
              style={handleSelectStyle('now_playing')}
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
          {genreId ? (
            genreId &&
            setPopularMovies(
              select === 'now_playing' ? playingMovies : upcomingMovies,
              genreId,
            ).map((movie, i) => <Movie key={movie.id} movie={movie} />)
          ) : select === 'now_playing' ? (
            <>
              {playingMovies?.map(movie => (
                <Movie key={movie.id} movie={movie} />
              ))}
              <div ref={lastPlayingMovieElementRef}></div>
            </>
          ) : (
            <>
              {upcomingMovies?.map(movie => (
                <Movie key={movie.id} movie={movie} />
              ))}
              <div ref={lastUpcomingMovieElementRef}></div>
            </>
          )}
        </Layout>
      </S.MainSection>
    </>
  );
};

export default MainPage;
