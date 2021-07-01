// import App from 'next/app';
import Router from 'next/router';
import { ApolloProvider } from '@apollo/client';
import NProgress from 'nprogress';

import withData from '../lib/withData';
import LayoutWrapper from '../layouts/layout-wrapper';
import '../styles/globals.scss';
import { CartStateProvider } from '../lib/cartState';

// TODO add a cool loading indication

// TODO add nprogress bar here at some point

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps, apollo }) {
  return (
    <ApolloProvider client={apollo}>
      <CartStateProvider>
        <LayoutWrapper {...pageProps}>
          <Component {...pageProps} />
        </LayoutWrapper>
      </CartStateProvider>
    </ApolloProvider>
  );
}

MyApp.getInitialProp = async function ({ Component, ctx }) {
  // TODO understand better
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps };
};

export default withData(MyApp);

// export default class MyApp extends App {
//   render() {
//     const { Component, pageProps } = this.props;
//     return (
//       <ApolloProvider>
//         <LayoutWrapper {...pageProps}>
//           <Component {...pageProps} />
//         </LayoutWrapper>
//       </ApolloProvider>
//     );
//   }
// }
