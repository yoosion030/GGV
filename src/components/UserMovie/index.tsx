import axios from 'axios';
import { useEffect, useState } from 'react';
import { DetailDataType, MovieDetailType } from 'types/MovieDetail';
import * as S from 'shared/styles/Movie';
import Image from 'next/image';
import { useRecoilState } from 'recoil';
import { LikeMovie } from 'atoms';
import * as I from 'assets/svg';
import { setLocalstorage } from 'hooks/setLocalstorage';

interface UserMovieProps {
  id: number;
}

const UserMovie = ({ id }: UserMovieProps) => {
  const [isLike, setIsLike] = useState(false);
  const [movie, setMovie] = useState<MovieDetailType>(); // prop으로 받아온 id의 영화
  const [likeMovie, setLikeMovie] = useRecoilState(LikeMovie); // 좋아요 누른 영화 id의 배열
  /**
   * prop으로 넘어온 id의 영화 데이터 구하기
   */
  const getData = async () => {
    try {
      const { data }: DetailDataType = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`,
      );
      setMovie(data);
    } catch (e) {
      console.log(e);
    }
  };

  /**
   * 좋아요 버튼 눌렀을 때 실행시키는 함수
   */
  const handleLike = () => {
    setIsLike(!isLike);

    if (movie) {
      // movie 데이터가 있고
      if (likeMovie) {
        // 저장한 영화가 이미 있고
        if (likeMovie.includes(movie.id)) {
          // 중복된 영화를 저장했을 때 (삭제)
          setLocalstorage(
            'likeMovie',
            likeMovie.filter(value => value !== movie.id),
          );
          setLikeMovie(likeMovie.filter(value => value !== movie.id));
        } else {
          // 중복되지 않은 영화를 저장했을 때 (추가)
          setLocalstorage('likeMovie', [...likeMovie, movie.id]);
          setLikeMovie([...likeMovie, movie.id]);
        }
      } else {
        // 저장한 영화가 없을 때 실행
        setLocalstorage('likeMovie', [movie.id]);
        setLikeMovie([movie.id]);
      }
    }
  };

  useEffect(() => {
    getData();
    const result = window.localStorage.getItem('likeMovie');

    if (movie) {
      if (result !== null) {
        setIsLike(result.includes(movie.id.toString()));
        setLikeMovie(JSON.parse(result));
      }
    }
  }, [movie, setLikeMovie]);
  return (
    <S.Movie>
      <S.MovieInfo href={`movie/${movie?.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
          alt=""
          width={350}
          height={461}
        />
        <S.Title>{movie?.title}</S.Title>
        <S.Overview>{movie?.overview}</S.Overview>
      </S.MovieInfo>
      <S.LikeButton onClick={handleLike}>
        {isLike ? <I.PinkLikeIcon /> : <I.LikeIcon />}
      </S.LikeButton>
    </S.Movie>
  );
};

export default UserMovie;
