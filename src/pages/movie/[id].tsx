import axios from 'axios';
import { constants } from 'fs/promises';
import type { GetServerSideProps, NextPage } from 'next';
import { MovieData } from 'types/Movie';

const detail: NextPage<MovieData> = ({ data }) => {
  console.log(data);
  return <div>hi</div>;
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const { data }: MovieData = await axios.get(
      `https://api.themoviedb.org/3/movie/${params?.id}?api_key=${process.env.API_KEY}`,
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

export default detail;
