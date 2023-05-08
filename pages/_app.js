import { Provider } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import store from '../redux/store';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

export default MyApp;
