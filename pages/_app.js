import Newfooter from "@/components/Footer/Newfooter";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { DataProvider } from "@/context/DataContext";
import "@/styles/globals.css";
import UpdateNavbar from "@/components/header/UpdateNavbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from "react-redux";
import { store } from "../redux/store"; // Remove persistor import

export default function App({ Component, pageProps }) {
  const phoneNumber = "+971502825433";

  const handleOpen = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Provider store={store}>
      {/* Remove PersistGate */}
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
    </Provider>
  );
}
