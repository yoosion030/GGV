import type { AppProps } from 'next/app';
import { GlobalStyle } from 'shared/styles/GlobalStyle';
import { QueryClient, QueryClientProvider } from 'react-query';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>GGV</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
