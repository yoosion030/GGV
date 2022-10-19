import axios from 'axios';
import { Movie } from 'components';
import { useEffect, useState } from 'react';

const MainPage = () => {
  const [movies, setMovies] = useState<Array<any>>();
  const getData = async () => {
    const { data } = await axios.get(
      'https://api.themoviedb.org/3/movie/now_playing/?api_key=' +
        process.env.API_KEY,
    );
    console.log(data);
    setMovies(data.results);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {movies?.map((movie, id) => (
        <Movie key={id} movie={movie} />
      ))}
    </div>
  );
};

export default MainPage;
