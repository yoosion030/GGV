import axios from 'axios';
import { Movie, Layout } from 'components';
import { useEffect, useState } from 'react';
import { MovieDataType, MovieType } from 'types/Movie';

interface UserMovieProps {
  id: number;
}

const SimilarMovie = ({ id }: UserMovieProps) => {
  const [movies, setMovies] = useState<MovieType[]>(); // prop으로 받아온 id의 영화

  /**
   * prop으로 넘어온 id의 영화 데이터 구하기
   */
  const getData = async () => {
    try {
      const { data }: MovieDataType = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.API_KEY}`,
      );
      setMovies(data.results);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Layout>
      {movies?.map(movie => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </Layout>
  );
};

export default SimilarMovie;
