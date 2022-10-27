import Image from 'next/image';
import { MovieType } from 'types/Movie';
import * as S from 'shared/styles/Movie';
import * as I from 'assets/svg';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { LikeMovie } from 'atoms';

interface MovieProps {
  movie: MovieType;
}

const Movie = ({ movie }: MovieProps) => {
  const [isLike, setIsLike] = useState(false); // 좋아요 관리
  const [likeMovie, setLikeMovie] = useRecoilState(LikeMovie); // 좋아요 누른 영화 아이디 배열

  /**
   * 페이지 첫 렌더링 시 로컬스토리지에 저장된 likeMovie를 가져와 초기값 설정
   * likeMovie 아이디 값에 현재 movie.id 값이 있다면 좋아요 설정
   * 값이 없다면 return
   */
  useEffect(() => {
    const result = window.localStorage.getItem('likeMovie');
    if (result !== null) {
      setIsLike(result.includes(movie.id.toString()));
      setLikeMovie(JSON.parse(result));
    }
  }, []);

  /**
   * 좋아요 버튼 눌렀을 때 실행시키는 함수
   */
  const handleLike = () => {
    setIsLike(!isLike);

    if (likeMovie) {
      // 저장한 영화가 이미 있고
      if (likeMovie.includes(movie.id)) {
        // 중복된 영화를 저장했을 때 (삭제)
        setLikeMovie(likeMovie.filter(value => value !== movie.id));
        window.localStorage.setItem(
          'likeMovie',
          JSON.stringify(likeMovie.filter(value => value !== movie.id)),
        );
      } else {
        // 중복되지 않은 영화를 저장했을 때 (추가)
        setLikeMovie([...likeMovie, movie.id]);
        window.localStorage.setItem(
          'likeMovie',
          JSON.stringify([...likeMovie, movie.id]),
        );
      }
    } else {
      // 저장한 영화가 없을 때 실행
      setLikeMovie([movie.id]);
      window.localStorage.setItem('likeMovie', JSON.stringify([movie.id]));
    }
  };

  return (
    <S.Movie>
      <S.MovieInfo href={`movie/${movie.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt=""
          width={350}
          height={461}
        />
        <S.Title>{movie.title}</S.Title>
        <S.Overview>{movie.overview}</S.Overview>
      </S.MovieInfo>
      <S.LikeButton onClick={handleLike}>
        {isLike ? <I.PinkLikeIcon /> : <I.LikeIcon />}
      </S.LikeButton>
    </S.Movie>
  );
};

export default Movie;
