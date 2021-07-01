import '../assets/styles/globals.css';
import '../assets/styles/flex-slider.css';
import '../assets/styles/fontawesome.css';
import '../assets/styles/owl.css';
import '../assets/styles/templatemo-host-cloud.css';
import '../assets/css/normalize.css';
import '../components/header/Header.css';
import '../assets/css/peyton.css';
import '../assets/css/components.css';
import '../components/carouselDefault/CarouselDefault.css';
import '../components/benefit/Benefit.css';

import Layout from '../components/Layout';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
export default MyApp
