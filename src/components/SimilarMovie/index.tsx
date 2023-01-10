import axios from 'axios';
import { Movie, Layout } from 'components';
import { useCallback, useEffect, useRef, useState } from 'react';
import { MovieDataType, MovieType } from 'types/Movie';

interface UserMovieProps {
  id: number;
}

const SimilarMovie = ({ id }: UserMovieProps) => {
  const [movies, setMovies] = useState<MovieType[]>([]); // prop으로 받아온 id의 영화
  const pageNumber = useRef<number>(1);
  const lastMovieElementRef = useRef<HTMLDivElement>(null);

  /**
   * prop으로 넘어온 id의 영화 데이터 구하기
   */
  const getMovies = useCallback(async () => {
    try {
      const { data }: MovieDataType = await axios.get(
        `${process.env.BASE_URL}/${id}/similar?api_key=${process.env.API_KEY}&page=${pageNumber.current}`,
      );
      setMovies((prevMovies: MovieType[]) => [...prevMovies, ...data.results]);
      pageNumber.current += 1;
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    if (!lastMovieElementRef.current || movies?.length >= 100) return;

    const io = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) {
        getMovies();
      }
    });

    io.observe(lastMovieElementRef.current);
    return () => io.disconnect();
  }, [getMovies, movies?.length]);

  return (
    <>
      {movies?.map(movie => (
        <Movie key={movie.id} movie={movie} />
      ))}
      <div ref={lastMovieElementRef}></div>
    </>
  );
};

export default SimilarMovie;
