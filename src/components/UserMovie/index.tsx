import axios from 'axios';
import { useEffect, useState } from 'react';
import { DetailDataType, MovieDetailType } from 'types/MovieDetail';
import * as S from 'shared/styles/Movie';
import Image from 'next/image';
import { useRecoilState } from 'recoil';
import { LikeMovie } from 'atoms';
import * as I from 'assets/svg';

interface UserMovieProps {
  id: number;
}

const UserMovie = ({ id }: UserMovieProps) => {
  const [isLike, setIsLike] = useState(false);
  const [movie, setMovie] = useState<MovieDetailType>();
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
  const [likeMovie, setLikeMovie] = useRecoilState(LikeMovie);
  const handleLike = () => {
    setIsLike(!isLike);

    if (movie) {
      if (likeMovie) {
        if (likeMovie.includes(movie.id)) {
          console.log(likeMovie);
          setLikeMovie(likeMovie.filter(value => value !== movie.id));
          window.localStorage.setItem(
            'likeMovie',
            JSON.stringify(likeMovie.filter(value => value !== movie.id)),
          );
        } else {
          window.localStorage.setItem(
            'likeMovie',
            JSON.stringify([...likeMovie, movie.id]),
          );
          setLikeMovie([...likeMovie, movie.id]);
        }
      } else {
        setLikeMovie([movie.id]);
        window.localStorage.setItem('likeMovie', JSON.stringify([movie.id]));
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
