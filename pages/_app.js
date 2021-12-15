import '../styles/globals.css'
import Layout from '../components/layout/layout';
import { Fragment } from 'react/cjs/react.production.min';
function MyApp({ Component, pageProps }) {

  return (
    <Fragment>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
};

export default MyApp