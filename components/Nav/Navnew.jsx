import React, {useState, useEffect} from "react";
import styles from "./Navnew.module.css";
import Logo from "../../public/images/qwiklif.svg";
import Telephone from "../../public/images/telephone.svg";
import Image from "next/image";
import Image1 from "../../public/images/slider/1.png";
import Image2 from "../../public/images/slider/2.png";
import Image3 from "../../public/images/slider/3.png";
import Image4 from "../../public/images/slider/4.png";
import Image5 from "../../public/images/slider/5.png";

import ImageCarousel from "../Imagecarousel/ImageCarousel";
const images = [Image1, Image2, Image3, Image4, Image5];
const Navnew = () => {
  const [header, setHeader] = useState(styles.header);

  const listenScrollEvent = () => {
    if (window.scrollY < 73) {
      setHeader(styles.header);
    } else if (window.scrollY > 70) {
      setHeader(styles.header2);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const tabs = [
    "Home",
    "About",
    "Services",
    "Fleet",
    "Media",
    "Blog",
    "Our Location",
    "Contact",
  ];
  return (
    <div>
      <ImageCarousel images={images} />
    </div>
  );
};

export default Navnew;
