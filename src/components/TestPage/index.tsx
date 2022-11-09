import { useState } from 'react';
import { MovieType } from 'types/Movie';
import { Header, Popular, Toggle, Movie } from 'components';
import * as S from './style';

interface MovieDataPropsType {
  popular: {
    results: MovieType[];
  };
}

const MainPage = ({ popular }: MovieDataPropsType) => {
  const [popularMovies] = useState<MovieType[]>(popular.results);

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
        <S.MovieSection>
          {actionMovies.length !== 0 && (
            <>
              <S.MainTitle>액션 영화</S.MainTitle>
              <S.ScrollSection>
                {actionMovies?.map(movie => (
                  <Movie key={movie.id} movie={movie} />
                ))}
              </S.ScrollSection>
            </>
          )}

          {adventureMovies.length !== 0 && (
            <>
              <S.MainTitle>어드벤쳐 영화</S.MainTitle>
              <S.ScrollSection>
                {adventureMovies?.map(movie => (
                  <Movie key={movie.id} movie={movie} />
                ))}
              </S.ScrollSection>
            </>
          )}

          {animationMovies.length !== 0 && (
            <>
              <S.MainTitle>애니메이션 영화</S.MainTitle>
              <S.ScrollSection>
                {animationMovies?.map(movie => (
                  <Movie key={movie.id} movie={movie} />
                ))}
              </S.ScrollSection>
            </>
          )}

          {comedyMovies.length !== 0 && (
            <>
              <S.MainTitle>코미디 영화</S.MainTitle>
              <S.ScrollSection>
                {comedyMovies?.map(movie => (
                  <Movie key={movie.id} movie={movie} />
                ))}
              </S.ScrollSection>
            </>
          )}

          {romanceMovies.length !== 0 && (
            <>
              <S.MainTitle>로맨스 영화</S.MainTitle>
              <S.ScrollSection>
                {romanceMovies?.map(movie => (
                  <Movie key={movie.id} movie={movie} />
                ))}
              </S.ScrollSection>
            </>
          )}

          {horrorMovies.length !== 0 && (
            <>
              <S.MainTitle>호러 영화</S.MainTitle>
              <S.ScrollSection>
                {horrorMovies?.map(movie => (
                  <Movie key={movie.id} movie={movie} />
                ))}
              </S.ScrollSection>
            </>
          )}
        </S.MovieSection>
      </S.MainSection>
    </>
  );
};

export default MainPage;
