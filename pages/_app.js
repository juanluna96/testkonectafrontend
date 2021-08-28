import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/lux/bootstrap.css';

function MyApp({ Component, pageProps }) {
  return <Component { ...pageProps } />
}

export default MyApp
