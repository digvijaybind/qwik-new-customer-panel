import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import Logo from '../../public/images/logo.svg';
import styles from './Header.module.css';
import Telephone from '../../public/images/telephone.svg';
import { useRouter } from 'next/router';
import { MdCancel } from 'react-icons/md';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col font-sans relative">
      <div className="text-center flex items-center justify-center bg-[#12B5E4] w-full h-[24px] text-[8px] font-bold text-[#fff] font-sans">
        AVAILABLE 24/7 FOR INTERNATIONAL AND DOMESTIC FLIGHTS
      </div>
      <div className="flex flex-row justify-between items-center px-[10px] py-[10px] font-sans">
        <div className="flex flex-row justify-between">
          <div className="">
            <Image src={Logo} width={95} height={90} />
          </div>
        </div>
        <div className="font-semibold text-[10px]">
          <div className={styles.telephonehamburg}>
            <div className={styles.Innertelephone}>
              <Image
                src={Telephone}
                width={18}
                height={26}
                className={styles.ImageSvg}
              />
              <span
                className={`${styles.telephoneText} text-[#fff] border-r-7 `}
              >
                {' '}
                +971 502 825 433
              </span>
            </div>
          </div>
        </div>
        <div className=" top-10 right-2 z-50">
          <button className="hamburger-button" onClick={toggleMenu}>
            ☰ {/* Hamburger icon */}
          </button>
        </div>
      </div>
      {isOpen && (
        <div
          ref={menuRef}
          onClick={toggleMenu}
          className="fixed top-0 left-0 w-full h-full bg-[#fff] bg-opacity-90 flex justify-end z-40"
        >
          <div className="bg-[#fff] w-2/3 h-full shadow-lg flex justify-center">
            <button
              className="absolute top-0 right-0 p-2 text-gray-800 focus:outline-none"
              onClick={toggleMenu}
            >
              <MdCancel />
            </button>
            <ul className="text-center mt-10">
              <li
                onClick={() => {
                  router.push('/');
                  toggleMenu();
                }}
                className="font-semibold text-[16px] p-2 hover:gray cursor-pointer"
              >
                Home
              </li>
              <li
                onClick={() => {
                  router.push('/services');
                  toggleMenu();
                }}
                className="font-semibold text-[16px] p-2 hover:gray cursor-pointer"
              >
                Services
              </li>
              <li
                onClick={() => {
                  router.push('/blog');
                  toggleMenu();
                }}
                className="font-semibold text-[16px] p-2 hover:gray cursor-pointer"
              >
                Partner with Us
              </li>
              <li className="font-semibold text-[16px] p-2 hover:gray cursor-pointer">
                Our Location
              </li>
              <li
                className="font-semibold text-[16px] p-2 hover:gray cursor-pointer"
                onClick={() => {
                  router.push('/about');
                  toggleMenu();
                }}
              >
                About
              </li>
              <li
                className="font-semibold text-[16px] p-2 hover:gray cursor-pointer"
                onClick={() => {
                  router.push('/about');
                  toggleMenu();
                }}
              >
                Contact
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
