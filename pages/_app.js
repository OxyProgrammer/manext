import PropTypes from 'prop-types';
import Head from 'next/head';
import { CacheProvider } from '@emotion/react';
import { StylesProvider } from '@mui/styles';
import { createEmotionCache, generateClassName } from '../core-components/style-cache';
import Layout from 'core-components/Layout';
import { SnackbarProvider } from 'notistack';
import { Provider } from 'core-components/app';

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <StylesProvider generateClassName={generateClassName}>
        <Head>
          <title>Manext</title>
          <meta name='viewport' content='initial-scale=1, width=device-width' />
        </Head>
        <>
          <Provider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Provider>
        </>
      </StylesProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
