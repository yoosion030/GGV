import { useState } from 'react';
import { MovieType } from 'types/Movie';
import { Header, Popular, Movie } from 'components';
import * as S from './style';
import { setPopularMovies } from 'hooks/setPopularMovies';

interface MovieDataPropsType {
  popular: {
    results: MovieType[];
  };
}

interface MovieObjectType {
  movies: MovieType[];
  title: string;
}

const MainPage = ({ popular }: MovieDataPropsType) => {
  const [popularMovies] = useState<MovieType[]>(popular.results);

  const actionMovies = setPopularMovies(popular, 28);
  const animationMovies = setPopularMovies(popular, 16);
  const comedyMovies = setPopularMovies(popular, 35);
  const romanceMovies = setPopularMovies(popular, 10749);
  const horrorMovies = setPopularMovies(popular, 27);
  const adventureMovies = setPopularMovies(popular, 12);
  const warMovies = setPopularMovies(popular, 10752);

  const movieObject: MovieObjectType[] = [
    {
      movies: actionMovies,
      title: '액션 영화',
    },
    {
      movies: animationMovies,
      title: '에니메이션 영화',
    },
    {
      movies: comedyMovies,
      title: '코미디 영화',
    },
    {
      movies: romanceMovies,
      title: '로맨스 영화',
    },
    {
      movies: horrorMovies,
      title: '호러 영화',
    },
    {
      movies: adventureMovies,
      title: '어드벤쳐 영화',
    },
    {
      movies: warMovies,
      title: '전쟁 영화',
    },
  ];

  return (
    <>
      <Header />
      <Popular movie={popularMovies} />

      <S.MainSection>
        <S.MovieSection>
          {movieObject.map((value, i) => (
            <div key={i}>
              {value.movies.length !== 0 && (
                <>
                  <S.MainTitle>{value.title}</S.MainTitle>
                  <S.ScrollSection>
                    {value.movies.map(movie => (
                      <Movie key={movie.id} movie={movie} />
                    ))}
                  </S.ScrollSection>
                </>
              )}
            </div>
          ))}
        </S.MovieSection>
      </S.MainSection>
    </>
  );
};

export default MainPage;
