import Image from 'next/image';
interface MovieProps {
  movie: {
    title: string;
    poster_path: string;
    release_date: string;
  };
}

const Movie = ({ movie }: MovieProps) => {
  return (
    <>
      <p>{movie.title}</p>
      <p>{movie.release_date}</p>
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt=""
        width={120}
        height={120}
      />
    </>
  );
};

export default Movie;
