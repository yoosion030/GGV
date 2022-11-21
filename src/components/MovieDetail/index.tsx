import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { MovieDetailDataType, MovieDetailType } from 'types/MovieDetail';
import * as S from './style';
import * as I from 'assets/svg';
import { css } from '@emotion/react';
import { likeButtonAnimation } from 'shared/styles/Animation';
import { useRecoilState } from 'recoil';
import { LikeMovie } from 'atoms';
import { getLocalstorage, getUser, HandleLike } from 'hooks';

interface DetailProps {
  movie: MovieDetailType;
}

const MovieDetail = ({ movie }: DetailProps) => {
  const [KRData, setKRData] = useState<MovieDetailType>();
  const [isLike, setIsLike] = useState<boolean>(false);
  const [likeMovie, setLikeMovie] = useRecoilState(LikeMovie); // 좋아요 누른 영화 아이디 배열
  const [user, setUser] = useState<string>();
  const list = ['개봉', '장르', '국가', '회사', '예산', '러닝타임'];
  // 배열 정렬
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

  const getKRData = async () => {
    // 번역본 가져오기
    try {
      const { data }: MovieDetailDataType = await axios.get(
        `https://api.themoviedb.org/3/movie/${movie?.id}?api_key=${process.env.API_KEY}&language=ko-KR`,
      );

      setKRData(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getKRData();
  }, [movie]);

  /**
   * 하트 클릭 시 애니메이션
   */
  const handleAnimation = () =>
    css({
      animation: `${likeButtonAnimation} .45s`,
      width: '100%',
    });

  useEffect(() => {
    // 로컬스토리지에 저장된 유저 정보 가져오기
    const userInfo = getUser();
    setUser(userInfo);
    const result = getLocalstorage(userInfo);

    if (result) {
      setIsLike(result.includes(movie.id.toString()));
      setLikeMovie(JSON.parse(result));
    }
  }, []);

  return (
    <>
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
          <S.ButtonSection>
            {movie?.homepage && (
              <S.HomepageButton
                onClick={() => movie && window.open(movie.homepage)}
              >
                홈페이지 바로가기
              </S.HomepageButton>
            )}
            <S.LikeButton
              onClick={() =>
                HandleLike(
                  isLike,
                  setIsLike,
                  movie,
                  user,
                  likeMovie,
                  setLikeMovie,
                )
              }
            >
              {isLike ? (
                <div css={handleAnimation}>
                  <I.PinkLikeIcon />
                </div>
              ) : (
                <I.LikeIcon color="black" />
              )}
              좋아요
            </S.LikeButton>
          </S.ButtonSection>
        </S.TextSection>
      </S.MovieSection>
      <S.OverviewSection>
        <S.Title>줄거리</S.Title>
        <S.SubTitle>
          {KRData?.overview ? KRData.overview : movie?.overview}
        </S.SubTitle>
      </S.OverviewSection>
    </>
  );
};

export default MovieDetail;
