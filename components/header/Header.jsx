import React, { useEffect } from 'react';
import Logo from '../../public/images/logo.svg';
import Image from 'next/image';
import styles from './Header.module.css';
import Link from 'next/link';
import { useState } from 'react';
import { BsTelephoneFill } from 'react-icons/bs';
import aeroplane from '../../public/images/header/aeroplane.svg';
//Navigation Tabs
const tabs = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'About',
    url: '/about',
  },
  {
    title: 'Services',
    url: '/services',
  },
  {
    title: 'Our Location',
    url: 'https://qwiklif.com/our-location/',
  },
  {
    title: 'Media',
    url: '/media',
  },
  {
    title: 'Partner with us',
    url: '/workwithus',
  },
  {
    title: 'Blog',
    url: '/blogs',
  },

  {
    title: 'Contact',
    url: '/contact',
  },
];

const Header = () => {
  //state for active and scroll position

  const [activeTab, setActiveTab] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  //Handle tab click
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  //Handle Scroll event to toggle background class
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  //Add scroll event listner on mount and clean up on unmount

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${isScrolled ? styles.header2 : styles.header}`}>
      <div
        className={` ${styles.shadow}   px-[50px] font-sans flex justify-between items-center flex-row w-full`}
      >
        {/* Logo */}

        <div className={styles.logo}>
          <Link href="/">
            <div className="relative h-[100px] w-[150px]">
              <Image src={Logo} layout="fill" objectFit="contain" />
            </div>
          </Link>
        </div>

        {/* Navigation Tabs */}

        <div
          className={`flex flex-row items-center ${styles.MenuTabResposive}`}
        >
          <ul className={`flex flex-row`}>
            {tabs.map((tab, index) => (
              <Link href={tab.url} key={'menu-item' + index}>
                <li
                  key={index}
                  className={`cursor-pointer py-5 px-5  border-b-2 text-[16px]  font-[500] font-sans text-[#000] ${
                    styles.Tabli
                  } ${
                    index === activeTab
                      ? 'border-[#000]  text-[#000]'
                      : 'border-transparent text-[#000]'
                  }`}
                  onClick={() => handleTabClick(index)}
                >
                  {tab.title}
                </li>
              </Link>
            ))}
          </ul>

          {/* Telephone  Section */}

          <div className={styles.telephone}>
            <div className={styles.Innertelephone}>
              <span
                className={`${styles.telephoneText} text-[#fff] border-r-7 font-normal`}
              >
                {' '}
                +971 502 825 433
              </span>
              <Image src={aeroplane} height={30} width={45} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
