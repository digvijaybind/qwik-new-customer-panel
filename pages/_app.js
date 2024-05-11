import Newfooter from '@/components/Footer/Newfooter';
import Navbar from '@/components/header/Navbar';
import Navbar1 from '@/components/header/Navbar1';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import { DataProvider } from '@/context/DataContext';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  const BusinessWhatsAppNumber = process.env.REACT_WHATSAPP_NUMBER;
  const handleOpen = () => {
    const url = `https://wa.me/${BusinessWhatsAppNumber}`;
    window.open(url, '_blank');
  };
  return (
    <>
      <DataProvider>
        <Navbar />
        <Component {...pageProps} />
        <FloatingWhatsApp
          phoneNumber="+971502825433"
          accountName="Qwiklif Air Ambulance"
          allowEsc
          allowClickAway
          notification
          notificationSound
          onClick={handleOpen}
        />
        <Newfooter />
      </DataProvider>
    </>
  );
}
