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
import '../components/feedback/Feedback.css';
import '../components/partner/Partner.css';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import allReducer from '../redux/reducers';

import Layout from '../components/Layout';
import type { AppProps } from 'next/app';
import { useEffect } from "react";
import Aos from 'aos';

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: false,
      offset: 50,
      delay: 300,
    });
  }, []);

  const store = createStore(allReducer);
  
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
export default MyApp
