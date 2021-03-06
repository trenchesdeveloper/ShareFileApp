import axios from 'axios';
import '../styles/global.css'


axios.defaults.baseURL = 'http://localhost:8000'

function MyApp({ Component, pageProps }) {
  return (
    <div className='grid h-screen font-serif text-white bg-gray-900 place-items-center'>
      <div>
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
