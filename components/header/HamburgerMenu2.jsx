// HamburgerMenu.js
import React, {useState} from "react";
import styles from "./Header.module.css"; // Import CSS module for styling
import Logo from "../../public/images/logo.svg";
import Telephone from "../../public/images/telephone.svg";
import Image from "next/image";
const HamburgerMenu2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div class="flex flex-row justify-between items-center px-[40px] py-[20px]">
        <div class="flex flex-row justify-between">
          <div class="">
            <Image src={Logo} width={95} height={90} />
          </div>
        </div>
        <div class="font-semibold text-[10px]">
          <div className={styles.telephonehamburg}>
            <div className={styles.Innertelephone}>
              <Image src={Telephone} width={18} height={26} />
              <span
                className={`${styles.telephoneText} text-[#fff] border-r-7`}
              >
                {" "}
                +971 502 825 433
              </span>
            </div>
          </div>
        </div>
       

        {isOpen && (
            <div>
             <button className={styles.hamburgerButton} onClick={toggleMenu}>
          ☰ {/* Hamburger icon */}
        </button>
          <div className={styles.menu}>
            <div className={styles.CrossButton} onClick={toggleMenu}>
              X
            </div>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              {/* Add more menu items as needed */}
            </ul>
          </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HamburgerMenu2;
