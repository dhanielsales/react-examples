import { NextPage } from 'next';
import { AppProps } from 'next/app';

import { GlobalStyles } from '~/styles/global';

const App: NextPage<AppProps> = ({ Component, pageProps }) => (
  <>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
);

export default App;
