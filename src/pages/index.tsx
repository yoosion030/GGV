import type { GetServerSideProps, NextPage } from 'next';
import { MainPage } from 'components';
import axios from 'axios';
import { MovieDataPropsType, MovieDataType } from 'types/Movie';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getLocalstorage } from 'hooks';

const Home: NextPage<MovieDataPropsType> = ({ playing, upcoming, popular }) => {
  const { push } = useRouter();

  useEffect(() => {
    if (!getLocalstorage('name')) push('/register');
  }, []);

  return <MainPage playing={playing} upcoming={upcoming} popular={popular} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const popular: MovieDataType = await axios.get(
      `${process.env.BASE_URL}/popular/?api_key=${process.env.API_KEY}`,
    );

    const playing: MovieDataType = await axios.get(
      `${process.env.BASE_URL}/now_playing/?api_key=${process.env.API_KEY}`,
    );
    const upcoming: MovieDataType = await axios.get(
      `${process.env.BASE_URL}/upcoming/?api_key=${process.env.API_KEY}`,
    );

    return {
      props: {
        playing: playing.data.results,
        upcoming: upcoming.data.results,
        popular: popular.data.results,
      },
    };
  } catch (e) {
    return {
      props: {},
    };
  }
};

export default Home;
