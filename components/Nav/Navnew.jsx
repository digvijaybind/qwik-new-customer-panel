import React, { useState, useEffect } from 'react';
import styles from './Navnew.module.css';
import Image1 from '../../public/images/slider/1.svg';
import Image2 from '../../public/images/slider/2.svg';
import Image3 from '../../public/images/slider/3.svg';
import Image4 from '../../public/images/slider/4.svg';
import Image5 from '../../public/images/slider/5.svg';
import ImageCarousel from '../Imagecarousel/ImageCarousel';
const images = [Image1, Image2, Image3, Image4, Image5];
const Navnew = ({ isMobile }) => {
  const [header, setHeader] = useState(styles.header);

  const listenScrollEvent = () => {
    if (window.scrollY < 73) {
      setHeader(styles.header);
    } else if (window.scrollY > 70) {
      setHeader(styles.header2);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const tabs = [
    'Home',
    'About',
    'Services',
    'Fleet',
    'Media',
    'Blog',
    'Our Location',
    'Contact',
  ];
  return (
    <div className="z-0">
      {/* <ImageCarousel images={images} /> */}
    </div>
  );
};

export default Navnew;
