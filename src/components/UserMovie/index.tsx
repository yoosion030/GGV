import axios from 'axios';
import { MovieDetailType } from 'types/MovieDetail';
import { Movie } from 'components';
import { useQuery } from 'react-query';
interface UserMovieProps {
  id: number;
}

const UserMovie = ({ id }: UserMovieProps) => {
  const getUserMovieDetail = () => {
    return axios.get<MovieDetailType>(
      `${process.env.BASE_URL}/${id}?api_key=${process.env.API_KEY}`,
    );
  };

  const { data, isLoading } = useQuery(
    `getUserMovieDetail-${id}`,
    getUserMovieDetail,
  );

  return (
    <>
      {isLoading ? (
        <h1>로딩중입니다.</h1>
      ) : (
        <div>{data && <Movie movie={data?.data} />}</div>
      )}
    </>
  );
};

export default UserMovie;
