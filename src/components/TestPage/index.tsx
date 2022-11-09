import { useState } from 'react';
import { MovieType } from 'types/Movie';
import { Header, Popular, Toggle, Movie } from 'components';
import * as S from './style';
import { useRecoilState } from 'recoil';
import { Select } from 'atoms';
import { css } from '@emotion/react';

interface MovieDataPropsType {
  popular: {
    results: MovieType[];
  };
}

const MainPage = ({ popular }: MovieDataPropsType) => {
  const [popularMovies] = useState<MovieType[]>(popular.results);
  const [select, setSelect] = useRecoilState(Select);
  const handleSelectStyle = (selectname: 'playing' | 'upcoming') =>
    selectname !== select &&
    css({
      color: '#8D8D8D',
      transition: '500ms',
    });

  console.log(popular.results.filter(val => val.genre_ids[0] === 27));

  const actionMovies: MovieType[] = popular.results.filter(val =>
    val.genre_ids.includes(28),
  );
  const adventureMovies: MovieType[] = popular.results.filter(val =>
    val.genre_ids.includes(12),
  );
  const animationMovies: MovieType[] = popular.results.filter(val =>
    val.genre_ids.includes(16),
  );
  const comedyMovies: MovieType[] = popular.results.filter(val =>
    val.genre_ids.includes(35),
  );
  const romanceMovies: MovieType[] = popular.results.filter(val =>
    val.genre_ids.includes(10749),
  );
  const horrorMovies: MovieType[] = popular.results.filter(val =>
    val.genre_ids.includes(27),
  );

  return (
    <>
      <Header />
      <Popular movie={popularMovies} />
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
          <S.ScrollSection>
            {actionMovies?.map(movie => (
              <Movie key={movie.id} movie={movie} />
            ))}
          </S.ScrollSection>
          <hr />
          <S.ScrollSection>
            {adventureMovies?.map(movie => (
              <Movie key={movie.id} movie={movie} />
            ))}
          </S.ScrollSection>
          <hr />
          <S.ScrollSection>
            {animationMovies?.map(movie => (
              <Movie key={movie.id} movie={movie} />
            ))}
          </S.ScrollSection>
          <hr />
          <S.ScrollSection>
            {comedyMovies?.map(movie => (
              <Movie key={movie.id} movie={movie} />
            ))}
          </S.ScrollSection>
          <hr />
          <S.ScrollSection>
            {romanceMovies?.map(movie => (
              <Movie key={movie.id} movie={movie} />
            ))}
          </S.ScrollSection>
          <hr />
          <S.ScrollSection>
            {horrorMovies?.map(movie => (
              <Movie key={movie.id} movie={movie} />
            ))}
          </S.ScrollSection>
        </S.MovieSection>
      </S.MainSection>
    </>
  );
};

export default MainPage;
