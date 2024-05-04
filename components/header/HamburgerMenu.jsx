import Image from 'next/image';
import React, { useState } from 'react';
import Logo from '../../public/images/logo.svg';
import styles from './Header.module.css';
import Telephone from '../../public/images/telephone.svg';
import { useRouter } from 'next/router';
const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="flex flex-row justify-between items-center px-[10px] py-[10px] font-sans">
        <div className="flex flex-row justify-between">
          <div className="">
            <Image src={Logo} width={95} height={90} />
          </div>
        </div>
        <div className="font-semibold text-[10px]">
          <div className={styles.telephonehamburg}>
            <div className={styles.Innertelephone}>
              <Image src={Telephone} width={18} height={26} className={styles.ImageSvg} />
              <span
                className={`${styles.telephoneText} text-[#fff] border-r-7 `}
              >
                {' '}
                +971 502 825 433
              </span>
            </div>
          </div>
        </div>
        <div className="hamburger-menu">
          <button className="hamburger-button" onClick={toggleMenu}>
            ☰ {/* Hamburger icon */}
          </button>
        </div>
      </div>
      {isOpen && (
        <div
          className={`bg-[#fff] p-6 shadow-2xl snap-y max-h-[200px] overflow-y-auto`}
        >
          <ul className="">
            <li
              onClick={() => router.push('/')}
              className="font-semibold text-[16px] p-2   hover:gray"
            >
              Home
            </li>
            <li
              onClick={() => router.push('/services')}
              className="font-semibold text-[16px] p-2 hover:gray"
            >
              Services
            </li>
            <li
              onClick={() => router.push('/blog')}
              className="font-semibold text-[16px] p-2 hover:gray"
            >
              Blog
            </li>
            <li className="font-semibold text-[16px] p-2 hover:gray">
              Our Location
            </li>
            <li className="font-semibold text-[16px] p-2 hover:">About</li>
            <li className="font-semibold text-[16px] p-2 hover:">Contact</li>
            {/* Add more menu items as needed */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
