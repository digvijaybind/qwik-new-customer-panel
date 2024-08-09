import Newfooter from "@/components/Footer/Newfooter";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { DataProvider } from "@/context/DataContext";
import "@/styles/globals.css";
import UpdateNavbar from "@/components/header/UpdateNavbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import "../sentry.server.config";

export default function App({ Component, pageProps }) {
  const phoneNumber = "+971502825433";

  const handleOpen = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Provider store={store}>
      <DataProvider>
        <UpdateNavbar />

        <Component {...pageProps} />

        {/* WhatsApp floating component */}
        <FloatingWhatsApp
          accountName="Qwiklif Air Ambulance"
          allowEsc
          allowClickAway
          notification
          notificationSound
          onClick={handleOpen}
          style={{
            position: "fixed",
            bottom: "10px",
            right: "10px",
            zIndex: 1000,
          }}
        />
        <Newfooter />
      </DataProvider>
    </Provider>
  );
}
