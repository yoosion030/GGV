import type { GetServerSideProps, NextPage } from 'next';
import { MainPage } from 'components';
import axios from 'axios';
import { MovieDataPropsType, MovieDataType } from 'types/Movie';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getLocalstorage } from 'hooks';

const Home: NextPage<MovieDataPropsType> = ({ playing, upcoming }) => {
  const { push } = useRouter();

  useEffect(() => {
    const name = getLocalstorage('name');
    if (!name) push('/register');
  }, []);

  return <MainPage playing={playing} upcoming={upcoming} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const playing: MovieDataType = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing/?api_key=${process.env.API_KEY}`,
    );
    const upcoming: MovieDataType = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming/?api_key=${process.env.API_KEY}`,
    );

    return {
      props: {
        playing: playing.data,
        upcoming: upcoming.data,
      },
    };
  } catch (e) {
    return {
      props: {},
    };
  }
};

export default Home;
