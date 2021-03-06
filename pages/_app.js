import { Router } from 'next/router';
import nProgress from 'nprogress';
import Layout from '../components/Layout';
import '../styles/globals.css';
import '../styles/nprogress.css';

Router.events.on('routeChangeStart', () => {
  nProgress.start();
});
Router.events.on('routeChangeComplete', () => nProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
