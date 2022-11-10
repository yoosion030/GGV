import axios from 'axios';
import { useEffect, useState } from 'react';
import { MovieDetailDataType, MovieDetailType } from 'types/MovieDetail';
import { Movie } from 'components';

interface UserMovieProps {
  id: number;
}

const UserMovie = ({ id }: UserMovieProps) => {
  const [movie, setMovie] = useState<MovieDetailType>(); // prop으로 받아온 id의 영화

  /**
   * prop으로 넘어온 id의 영화 데이터 구하기
   */
  const getData = async () => {
    try {
      const { data }: MovieDetailDataType = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`,
      );
      setMovie(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // 받아온 영화 데이터를 Movie 컴포넌트에 전송
  return <>{movie && <Movie movie={movie} />}</>;
};

export default UserMovie;
