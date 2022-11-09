import type { GetServerSideProps, NextPage } from 'next';
import { MainPage, TestPage } from 'components';
import axios from 'axios';
import { MovieDataType, MovieType } from 'types/Movie';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

interface MovieDataPropsType {
  popular: {
    results: MovieType[];
  };
}

const Home: NextPage<MovieDataPropsType> = ({ popular }) => {
  const { push } = useRouter();

  useEffect(() => {
    const name = localStorage.getItem('name');
    if (!name) push('/register');
  }, []);

  return <TestPage popular={popular} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const popular: MovieDataType = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`,
    );

    return {
      props: {
        popular: popular.data,
      },
    };
  } catch (e) {
    return {
      props: {},
    };
  }
};

export default Home;
