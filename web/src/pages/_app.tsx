import '~/styles/globals.css';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import client from '~/lib/apollo-client';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Head>
        <title>Napo</title>
      </Head>

      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
