import Newfooter from '@/components/Footer/Newfooter';
import Navbar from '@/components/header/Navbar';
import Navbar1 from '@/components/header/Navbar1';

import { DataProvider } from '@/context/DataContext';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <DataProvider>
        <Navbar />
        <Component {...pageProps} />
        <Newfooter />
      </DataProvider>
    </>
  );
}
