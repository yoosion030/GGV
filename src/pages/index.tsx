import type { GetServerSideProps, NextPage } from 'next';
import { MainPage, RegisterPage } from 'components';
import axios from 'axios';
import { MovieDataType } from 'types/Movie';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Home: NextPage<MovieDataType> = ({ data }) => {
  const [name, setName] = useState<string>();
  const { push } = useRouter();

  useEffect(() => {
    const name = localStorage.getItem('name');
    if (!name) push('/register');
    else setName(name);
  }, []);

  return (
    <>
      <Head>
        <title>GGV</title>
      </Head>
      {name ? <MainPage data={data} /> : <RegisterPage />}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data }: MovieDataType = await axios.get(
      `https://api.themoviedb.org/3/movie/popular/?api_key=${process.env.API_KEY}`,
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
