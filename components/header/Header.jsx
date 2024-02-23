import React, { useEffect, useState } from 'react';
import Logo from '../../public/images/logo.svg';
import Image from 'next/image';
import styles from './Header.module.css';
import Telephone from '../../public/images/Telephone1.svg';
import Link from 'next/link';
const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
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
  const tabs1 = [
    'Home',
    'About',
    'Services',
    'Fleet',
    'Media',
    'Blog',
    'Our Location',
    'Contact',
  ];
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
      url: '',
    },
    {
      title: 'Fleet',
      url: '/fleet',
    },
    {
      title: 'Media',
      url: '/media',
    },
    {
      title: 'Blog',
      url: '/blogs',
    },
    {
      title: 'Our Location',
      url: '/location',
    },
    {
      title: 'Contact',
      url: '/contact-us',
    },
  ];
  return (
    <div>
      <header className={`${header} ${styles.shadow} px-[70px]`}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src={Logo} height={100} width={150} />
          </Link>
        </div>
        <div className={`flex flex-row items-center`}>
          <ul className={`flex flex-row`}>
            {tabs.map((tab, index) => (
              <Link href={tab.url}>
                <li
                  key={index}
                  className={`cursor-pointer py-10 px-5  border-b-2 text-[16px]  font-semibold ${
                    index === activeTab
                      ? 'border-[#11b6e3]  text-[#11b6e3]'
                      : 'border-transparent text-[#fff]'
                  }`}
                  onClick={() => handleTabClick(index)}
                >
                  {tab.title}
                </li>
              </Link>
            ))}
          </ul>
          <div className={``}></div>
          <div className={styles.telephone}>
            <div className={styles.Innertelephone}>
              <Image src={Telephone} width={18} height={26} />
              <span
                className={`${styles.telephoneText} text-[#fff] border-r-7`}
              >
                {' '}
                +971 502 825 433
              </span>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
