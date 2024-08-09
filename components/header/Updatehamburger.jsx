import React, { useState } from "react";
import styles from "./Updatehamburger.module.css";
import Logo from "../../public/images/logo.svg";
import { MdCancel } from "react-icons/md"; // Import the cancel icon
import Telephone from "../../public/images/telephone.svg";
import Image from "next/image";
import { useRouter } from "next/router"; // Import useRouter

const Updatehamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter(); // Initialize useRouter

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      {/* Top banner */}
      <div className={styles.banner}>
        AVAILABLE 24/7 FOR INTERNATIONAL AND DOMESTIC FLIGHTS
      </div>

      {/* Header container */}
      <div className={styles.headerContainer}>
        <div>
          <Image src={Logo} width={95} height={90} alt="Logo" />
        </div>
        <div className={styles.telephonehamburg}>
          <div className={styles.Innertelephone}>
            <Image
              src={Telephone}
              width={18}
              height={26}
              alt="Telephone"
              className={styles.ImageSvg}
              fetchPriority="high"
            />
          </div>
        </div>
        <button
          className={styles.toggleButton}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <MdCancel className={styles.cancelIcon} />
          ) : (
            <span className={styles.hamburgerIcon}>☰</span>
          )}
        </button>
      </div>

      {/* Navigation menu */}
      {isOpen && (
        <div className={styles.nav}>
          <div className={styles.navWrapper}>
            <div className={`${styles.logoContainer} flex justify-center`}>
              <Image
                src={Logo}
                alt="Logo"
                className={styles.logo}
                fetchPriority="high"
              />
            </div>
            <nav className="text-[14px] font-Inter">
              <a
                onClick={() => {
                  router.push("/");
                  toggleMenu();
                }}
              >
                HOME
              </a>

              <a
                onClick={() => {
                  router.push("/about");
                  toggleMenu();
                }}
              >
                ABOUT
              </a>
              <a
                onClick={() => {
                  router.push("/services");
                  toggleMenu();
                }}
              >
                SERVICES
              </a>
              <a
                onClick={() => {
                  router.push("/workwithus");
                  toggleMenu();
                }}
              >
                Partner with us
              </a>
              <a
                onClick={() => {
                  router.push("/contact-us");
                  toggleMenu();
                }}
                href="#"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Updatehamburger;
