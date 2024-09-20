import { AppProps } from 'next/app';
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <div lang="en">
      <Component {...pageProps} />
    </div>
  );
}

export default App;