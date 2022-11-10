import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { DetailDataType, MovieDetailType } from 'types/MovieDetail';
import * as S from './style';

interface DetailProps {
  movie: MovieDetailType | undefined;
}

const MovieDetail = ({ movie }: DetailProps) => {
  const [KRData, setKRData] = useState<MovieDetailType>();

  const getKRData = async () => {
    // 번역본 가져오기
    try {
      const { data }: DetailDataType = await axios.get(
        `https://api.themoviedb.org/3/movie/${movie?.id}?api_key=${process.env.API_KEY}&language=ko-KR`,
      );

      setKRData(data);
    } catch (e) {
      console.log(e);
    }
  };

  console.log(KRData);
  useEffect(() => {
    getKRData();
  }, [movie]);

  const list = ['개봉', '장르', '국가', '회사', '예산', '러닝타임'];
  const genres = KRData?.genres.map(value => value.name).join(', ');
  const companies = KRData?.production_companies
    .map(value => value.name)
    .join(', ');

  const info = [
    movie?.release_date,
    genres,
    movie?.original_language,
    companies,
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
          <S.Title>
            {movie?.title} ({KRData?.title})
          </S.Title>
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
        <S.SubTitle>
          {KRData?.overview ? KRData.overview : movie?.overview}
        </S.SubTitle>
      </S.OverviewSection>
    </div>
  );
};

export default MovieDetail;
