import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import Logo from "../../public/images/logo.svg";
import Telephone from "../../public/images/telephone.svg";
import styles from "./Header.module.css";
import { useRouter } from "next/router";
import { MdCancel } from "react-icons/md";


const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const menuRef = useRef(null);

  // Toggle menu
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Close menu when clicking outside
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const tabs = [
  { title: "Home", url: "/" },
  { title: "About us", url: "/about" },
  {
    title: "Services",
    url: "/services",
    subMenu: [
      { title: "Dedicated Air Ambulance", url: "/services/air-ambulance" },
      { title: "International Patient Transfer", url: "/services/patient-transfer" },
      { title: "Commercial Stretcher Transfer", url: "/services/commercial-stretcher" },
      { title: "Neonatal and Pediatric Air Transfer", url: "/services/neonatal-transfer" },
      { title: "ECMO Initiation and Air Transfer", url: "/services/ecmo-transfer" },
    ],
  },
  { title: "Our Locations", url: "/location" },
  { title: "Media", url: "/media" },
  { title: "Partner with us", url: "/workwithus" },
  { title: "Blog", url: "/blogs" },
  { title: "Contact Us", url: "/contact" },
];



  return (
    <div className="relative flex flex-col font-sans px-5">
      {/* Header Section */}
      <div className="flex justify-between items-center py-4">
        <div>
          <Image src={Logo} width={150} height={200} alt="Company Logo" />
        </div>
        <div className="flex items-center">
          <div className={styles.telephonehamburg}>
            <Image
              src={Telephone}
              width={18}
              height={26}
              className={styles.ImageSvg}
              alt="Telephone Icon"
            />
            <span className={`${styles.telephoneText} text-[#fff] ml-2`}>
              +971 502 825 433
            </span>
          </div>
          <button
            className="ml-4 flex items-center justify-center w-10 h-10 bg-gray-200 rounded-md focus:outline-none"
            aria-label="Toggle menu"
            onClick={toggleMenu}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <MdCancel className="text-black" style={{ fontSize: "1.8rem" }} />
            ) : (
              <span className="text-xl">☰</span>
            )}
          </button>
        </div>
      </div>

      {/* Menu Section */}
      {isOpen && (
        <div
          ref={menuRef}
          className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-90 flex justify-end z-40 transition-opacity duration-300 ease-in-out"
          role="dialog"
          aria-modal="true"
        >
          {/* Cancel Icon */}
          <button
            className="absolute top-5 right-5 text-black text-3xl focus:outline-none"
            onClick={() => setIsOpen(false)} // Close menu on cancel icon click
          >
            <MdCancel className="text-black" />
          </button>

          <div className="bg-white w-2/3 h-full shadow-lg flex flex-col justify-center">
            <ul className="text-center">
              {tabs.map((item, index) => (
                <li
                  key={index}
                  onClick={() => {
                    router.push(item.url); // Use the URL from the tabs array
                    setIsOpen(false); // Close the menu after navigation
                  }}
                  className="font-semibold text-lg p-4 hover:bg-gray-200 cursor-pointer transition-colors duration-200 hover:text-blue-600"
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
