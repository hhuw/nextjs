import '../styles/globals.css';
import store from '../store';
import { Provider } from 'react-redux';
export default function MyApp({ Component, pageProps }: any) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}