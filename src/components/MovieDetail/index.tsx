import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { MovieDetailType } from 'types/MovieDetail';
import * as S from './style';

interface DetailProps {
  movie: MovieDetailType | undefined;
}

const MovieDetail = ({ movie }: DetailProps) => {
  const [overview, setOverview] = useState();
  const getData = async () => {
    // 번역본 줄거리 가져오기
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${movie?.id}/translations?api_key=${process.env.API_KEY}`,
      );

      // 한국 변역본만 가져오기
      const {
        data: { overview },
      } = await data.translations.find((e: any) => e.iso_3166_1 === 'KR');
      setOverview(overview);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, [movie]);

  const list = ['개봉', '장르', '국가', '회사', '예산', '러닝타임'];

  const info = [
    movie?.release_date,
    movie?.genres[0].name,
    movie?.original_language,
    movie?.production_companies[0]?.name,
    movie?.budget.toLocaleString('ko-KR') + '원',
    movie?.runtime + '분',
  ];

  return (
    <div>
      <S.MovieSection>
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
          alt=""
          width={350}
          height={510}
        />
        <S.TextSection>
          <S.Title>{movie?.title}</S.Title>
          <S.InfoSection>
            <div>
              {list.map((item, i) => (
                <S.SubTitle key={i}>{item}</S.SubTitle>
              ))}
            </div>
            <div>
              {info.map((item, i) => (
                <S.MovieInfoText key={i}>{item}</S.MovieInfoText>
              ))}
            </div>
          </S.InfoSection>
          {movie?.homepage && (
            <S.Button onClick={() => movie && window.open(movie.homepage)}>
              홈페이지 바로가기
            </S.Button>
          )}
        </S.TextSection>
      </S.MovieSection>
      <S.OverviewSection>
        <S.Title>줄거리</S.Title>
        <S.SubTitle>{overview ? overview : movie?.overview}</S.SubTitle>
      </S.OverviewSection>
    </div>
  );
};

export default MovieDetail;
