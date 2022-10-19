import axios from 'axios';
import { DetailPage } from 'components';
import type { GetServerSideProps, NextPage } from 'next';
import { DetailDataType } from 'types/MovieDetail';

const detail: NextPage<DetailDataType> = ({ data }) => {
  console.log(data);
  return <DetailPage data={data} />;
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const { data }: DetailDataType = await axios.get(
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
