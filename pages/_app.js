import Newfooter from "@/components/Footer/Newfooter";
import Footer from "@/components/Footer/footer";
import Header from "@/components/header/Header";
import Navbar from "@/components/header/Navbar";
import Navbar1 from "@/components/header/Navbar1";
import {DataProvider} from "@/context/DataContext";
import { Poppins } from 'next/font/google'
 
const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})
 

import "@/styles/globals.css";

export default function App({Component, pageProps}) {
  return (
    <>
      <DataProvider>
        <Navbar1 />
        <Component {...pageProps} />
        <Newfooter />
        {/* <Newfooter /> */}
      </DataProvider>
    </>
  );
}
