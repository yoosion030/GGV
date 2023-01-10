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
  const [upcomingMovies, setUpcomingMovies] = useState<MovieType[]>(
    upcoming.reverse(),
  );
  const [select, setSelect] = useRecoilState(Select);
  const handleSelectStyle = (selectname: SelectType) =>
    selectname !== select &&
    css({
      color: '#8D8D8D',
      transition: 'color 500ms',
      cursor: 'pointer',
    });

  const [genreId] = useRecoilState(GenreId);
  const pageNumber = useRef<number>(2);
  const [movies, setMovies] = useState<MovieType[]>(playing);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const getMovies = useCallback(async () => {
    console.log(select);
    try {
      setLoading(true);
      const res: MovieDataType = await axios.get(
        `${process.env.BASE_URL}/${select}/?api_key=${process.env.API_KEY}&page=${pageNumber.current}`,
      );

      setMovies((prevPosts: MovieType[]) => [
        ...prevPosts,
        ...res.data.results,
      ]);
      setLoading(false);

      setLoading(false);

      if (movies.length <= 100) {
        pageNumber.current += 1;
      }
    } catch (e: any) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    if (movies.length >= 100) {
      setHasMore(false);
    }
  }, [movies]);

  const lastMovieElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(lastMovieElementRef.current);
    if (!lastMovieElementRef.current || !hasMore) return;

    const io = new IntersectionObserver((entries, observer) => {
      console.log(entries);
      if (entries[0].isIntersecting && !loading) {
        getMovies();
      }
    });

    io.observe(lastMovieElementRef.current);
    return () => io.disconnect();
  }, [getMovies, hasMore, loading, select]);

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
          {genreId
            ? genreId &&
              setPopularMovies(movies, genreId).map((movie, i) => (
                <Movie key={movie.id} movie={movie} />
              ))
            : select === 'now_playing'
            ? movies?.map(movie => <Movie key={movie.id} movie={movie} />)
            : upcomingMovies?.map(movie => (
                <Movie key={movie.id} movie={movie} />
              ))}
          <div ref={lastMovieElementRef}></div>
        </Layout>
      </S.MainSection>
    </>
  );
};

export default MainPage;
