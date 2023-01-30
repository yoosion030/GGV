import { Dispatch, SetStateAction } from 'react';

import { MovieType } from 'types/Movie';
import { MovieDetailType } from 'types/MovieDetail';
import { setLocalstorage } from './setLocalstorage';

/**
 * 좋아요 버튼 눌렀을 때 실행시키는 함수
 */
export const HandleLike = (
  isLike: boolean,
  setIsLike: Dispatch<SetStateAction<boolean>>,
  movie: MovieDetailType | MovieType,
  user: string | undefined,
  likeMovie: number[] | null | undefined,
  setLikeMovie: Dispatch<SetStateAction<number[] | null | undefined>>,
) => {
  setIsLike(!isLike);

  if (likeMovie) {
    // 저장한 영화가 이미 있고
    if (likeMovie.includes(movie.id)) {
      // 중복된 영화를 저장했을 때 (삭제)
      setLocalstorage(
        user,
        likeMovie.filter(value => value !== movie.id),
      );
      setLikeMovie(likeMovie.filter(value => value !== movie.id));
    } else {
      // 중복되지 않은 영화를 저장했을 때 (추가)
      setLocalstorage(user, [...likeMovie, movie.id]);
      setLikeMovie([...likeMovie, movie.id]);
    }
  } else {
    // 저장한 영화가 없을 때 실행
    setLocalstorage(user, [movie.id]);
    setLikeMovie([movie.id]);
  }
};
