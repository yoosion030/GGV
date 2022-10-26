import type { GetServerSideProps, NextPage } from 'next';
import { MainPage } from 'components';
import axios from 'axios';
import { MovieDataType } from 'types/Movie';
import Head from 'next/head';

const Home: NextPage<MovieDataType> = ({ data }) => {
  return (
    <>
      <Head>
        <title>GGV</title>
      </Head>
      <MainPage data={data} />
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
