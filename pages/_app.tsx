import { NextPage } from 'next';
import 'tailwindcss/tailwind.css';
import { AppProps } from 'next/app';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default MyApp;
