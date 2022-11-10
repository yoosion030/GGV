import type { GetServerSideProps, NextPage } from 'next';
import { DetailPage } from 'components';
import axios from 'axios';
import { MovieDetailDataType } from 'types/MovieDetail';

const detail: NextPage<MovieDetailDataType> = ({ data }) => {
  return <DetailPage data={data} />;
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const { data }: MovieDetailDataType = await axios.get(
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
