import App from 'next/app';
import { ApolloProvider } from '@apollo/client';

import LayoutWrapper from '../layouts/layout-wrapper';
import '../styles/globals.scss';


export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ApolloProvider>
        <LayoutWrapper {...pageProps}>
          <Component {...pageProps} />
        </LayoutWrapper>
      </ApolloProvider>
    );
  }
}
