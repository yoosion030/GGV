import type { GetServerSideProps, NextPage } from 'next';
import { MainPage } from 'components';
import axios from 'axios';
import { MovieData } from 'types/Movie';

const Home: NextPage<MovieData> = ({ data }) => {
  return <MainPage data={data} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data }: MovieData = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing/?api_key=${process.env.API_KEY}`,
    );
    return {
      props: {
        data,
      },
    };
  } catch (e) {
    return {
      props: {},
    };
  }
};

export default Home;
