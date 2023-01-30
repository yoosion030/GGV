import type { AppProps } from 'next/app';
import { GlobalStyle } from 'shared/styles/GlobalStyle';

import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>GGV</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
