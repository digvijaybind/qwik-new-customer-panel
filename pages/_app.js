import Newfooter from "@/components/Footer/Newfooter";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { DataProvider } from "@/context/DataContext";
import "@/styles/globals.css";
import UpdateNavbar from "@/components/header/UpdateNavbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react"; 
import { store, persistor } from "../redux/store"; 

export default function App({ Component, pageProps }) {
  const phoneNumber = "+971502825433";

  const handleOpen = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <DataProvider>
          <UpdateNavbar />
          <Component {...pageProps} />
          <FloatingWhatsApp
            accountName="Qwiklif Air Ambulance"
            allowEsc
            allowClickAway
            notification
            notificationSound
            onClick={handleOpen}
          />
          <Newfooter />
        </DataProvider>
      </PersistGate>
    </Provider>
  );
}
