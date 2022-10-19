import Image from 'next/image';
import Link from 'next/link';
import { MovieType } from 'types/Movie';

interface MovieProps {
  movie: MovieType;
}

const Movie = ({ movie }: MovieProps) => {
  return (
    <Link href={`movie/${movie.id}`}>
      <a>
        <p>{movie.title}</p>
        <p>{movie.release_date}</p>
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt=""
          width={120}
          height={120}
        />
      </a>
    </Link>
  );
};

export default Movie;
