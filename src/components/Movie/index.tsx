import Image from 'next/image';
import { MovieType } from 'types/Movie';
import * as S from './style';
import * as I from 'assets/svg';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { LikeMovie } from 'atoms';

interface MovieProps {
  movie: MovieType;
}

const Movie = ({ movie }: MovieProps) => {
  const [isLike, setIsLike] = useState(false);
  const [likeMovie, setLikeMovie] = useRecoilState(LikeMovie);

  useEffect(() => {
    console.log(likeMovie);
  }, [likeMovie]);

  useEffect(() => {
    const result = window.localStorage.getItem('likeMovie');
    if (result !== null) {
      setIsLike(result.includes(movie.id.toString()));
      setLikeMovie(JSON.parse(result));
    }
  }, []);

  const handleLike = () => {
    setIsLike(!isLike);

    if (likeMovie) {
      window.localStorage.setItem(
        'likeMovie',
        JSON.stringify([...likeMovie, movie.id]),
      );
      setLikeMovie([...likeMovie, movie.id]);
    } else {
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
