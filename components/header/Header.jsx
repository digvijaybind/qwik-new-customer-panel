import React from 'react';
import Logo from '../../public/images/logo.svg';
import Image from 'next/image';
import styles from './Header.module.css';
import Link from 'next/link';
import { useState } from 'react';
import { BsTelephoneFill } from 'react-icons/bs';
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
    url: '/location',
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
    url: '/contact-us',
  },
];

const Header = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div className="">
      <div
        className={` ${styles.shadow} px-[50px] font-sans flex justify-between items-center flex-row `}
      >
        <div className={styles.logo}>
          <Link href="/">
            <div className="relative h-[100px] w-[150px]">
              <Image
                src={Logo}
                // height={100}
                // width={150}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </Link>
        </div>
        <div
          className={`flex flex-row items-center ${styles.MenuTabResposive}`}
        >
          <ul className={`flex flex-row`}>
            {tabs.map((tab, index) => (
              <Link href={tab.url} key={'menu-item' + index}>
                <li
                  key={index}
                  className={`cursor-pointer py-5 px-5  border-b-2 text-[16px]  font-[500] font-sans text-[#000] ${styles.Tabli} ${
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

          <div className={styles.telephone}>
            <div className={styles.Innertelephone}>
              <BsTelephoneFill
                style={{
                  color: '#fff',
                }}
              />
              <span
                className={`${styles.telephoneText} text-[#fff] border-r-7 font-normal`}
              >
                {' '}
                +971 502 825 433
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
