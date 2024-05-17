import Newfooter from '@/components/Footer/Newfooter';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import { DataProvider } from '@/context/DataContext';
import '@/styles/globals.css';
import UpdateNavbar from '@/components/header/UpdateNavbar';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function App({ Component, pageProps }) {
  const BusinessWhatsAppNumber = process.env.REACT_WHATSAPP_NUMBER;
  const handleOpen = () => {
    const url = `https://wa.me/${BusinessWhatsAppNumber}`;
    window.open(url, '_blank');
  };
  return (
    <>
      <DataProvider>
        {/* <Navbar /> */}
        <UpdateNavbar />
        <Component {...pageProps} />
        {/*WhatsApp floating Component */}
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
