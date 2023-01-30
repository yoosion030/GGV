import Image from 'next/image';
import { MovieType } from 'types/Movie';
import * as S from './style';
import * as I from 'assets/svg';
import { useEffect, useState } from 'react';
import { LikeMovie } from 'atoms';
import { handleAnimation } from 'shared/styles/Animation';
import { getLocalstorage, getUser, HandleLike } from 'hooks';
import { useAtom } from 'jotai';
interface MovieProps {
  movie: MovieType;
}

const Movie = ({ movie }: MovieProps) => {
  const [isLike, setIsLike] = useState<boolean>(false); // 좋아요 관리
  const [likeMovie, setLikeMovie] = useAtom(LikeMovie); // 좋아요 누른 영화 아이디 배열
  /**
   * 페이지 첫 렌더링 시 로컬스토리지에 저장된 likeMovie를 가져와 초기값 설정
   * likeMovie 아이디 값에 현재 movie.id 값이 있다면 좋아요 설정
   * 값이 없다면 return
   */
  const [user, setUser] = useState<string>();
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
    <S.Movie>
      <S.MovieInfo href={`/movie/${movie.id}`}>
        <S.ImageWrapper>
          <Image
            layout="fill"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt=""
          />
        </S.ImageWrapper>
        <S.Title>{movie.title}</S.Title>
        <S.Overview>{movie.overview}</S.Overview>
      </S.MovieInfo>
      <S.LikeButton
        onClick={() =>
          HandleLike(isLike, setIsLike, movie, user, likeMovie, setLikeMovie)
        }
      >
        {isLike ? (
          <div css={handleAnimation}>
            <I.PinkLikeIcon />
          </div>
        ) : (
          <I.LikeIcon />
        )}
      </S.LikeButton>
    </S.Movie>
  );
};

export default Movie;
