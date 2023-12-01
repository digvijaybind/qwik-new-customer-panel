import Footer from "@/components/Footer/footer";
import Header from "@/components/header/Header";
import {DataProvider} from "@/context/DataContext";
import "@/styles/globals.css";

export default function App({Component, pageProps}) {
  return (
    <>
      <DataProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </DataProvider>
    </>
  );
}
