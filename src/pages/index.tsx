import type { GetServerSideProps, NextPage } from 'next';
import { MainPage } from 'components';
import axios from 'axios';
import { MovieDataType } from 'types/Movie';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Home: NextPage<MovieDataType> = ({ data }) => {
  const { push } = useRouter();

  useEffect(() => {
    const name = localStorage.getItem('name');
    if (!name) push('/register');
  }, []);

  return <MainPage data={data} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data }: MovieDataType = await axios.get(
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
