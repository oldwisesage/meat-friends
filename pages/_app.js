// import App from 'next/app';
import Router from 'next/router';
import { ApolloProvider } from '@apollo/client';
import { Normalize } from 'styled-normalize';
import withData from '../lib/withData';
import LayoutWrapper from '../layouts/layout-wrapper';
import { CartStateProvider } from '../lib/cartState';
import { GlobalStyle } from '../theme/GlobalStyles';

// Router.events.on('routeChangeStart', () => NProgress.start());
// Router.events.on('routeChangeComplete', () => NProgress.done());
// Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps, apollo }) {
  return (
    <>
      <GlobalStyle />
      <Normalize />
      <ApolloProvider client={apollo}>
        <CartStateProvider>
          <LayoutWrapper {...pageProps}>
            <Component {...pageProps} />
          </LayoutWrapper>
        </CartStateProvider>
      </ApolloProvider>
    </>
  );
}

MyApp.getInitialProp = async function ({ Component, ctx }) {
  // LEARN understand better
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps };
};

export default withData(MyApp);
