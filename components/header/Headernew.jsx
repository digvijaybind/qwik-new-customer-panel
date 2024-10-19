import React, { useEffect, useState } from "react";
import Logo from "../../public/images/Logo.png";
import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";
import { BsTelephoneFill } from "react-icons/bs";
import TopBanner from "../Utils/TopBanner";

// Navigation Tabs
const tabs = [
  { title: "Home", url: "/" },
  { title: "About us", url: "/about" },
  {
    title: "Services",
    url: "/services",
    subMenu: [
      { title: "Dedicated Air Ambulance", url: "/services/digital-marketing" },
      { title: "International Patient Transfer", url: "/services/seo" },
      { title: "Commercial Stretcher Transfer", url: "/services/seo" },
      {
        title: "Neonatal and Pediatric Air Transfer Services",
        url: "/services/web-development",
      },
      {
        title: "ECMO Initiation and Air Transfer Services",
        url: "/services/mobile-app-development",
      },
    ],
  },
  { title: "Our Locations", url: "/location" }, // Renamed
  { title: "Media", url: "/media" },
  { title: "Partner with us", url: "/workwithus" }, // Renamed
  { title: "Blog", url: "/blogs" },
  { title: "Contact Us", url: "/contact" },
];

const Headernew = () => {
  const [activeTab, setActiveTab] = useState(null); // Handle active tab index
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("static");
  const [activeDropdown, setActiveDropdown] = useState(null); // Track active dropdown

  // Handle tab click and toggle dropdown
  const handleTabClick = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null); // Close the dropdown if already open
    } else {
      setActiveTab(index);
      setActiveDropdown(index); // Open the clicked dropdown
    }
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 50) {
        setIsScrolled(true);
        if (currentScrollY > lastScrollY) {
          setScrollDirection("down");
        } else {
          setScrollDirection("up");
        }
      } else {
        setIsScrolled(false);
        setScrollDirection("static");
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <TopBanner />
      <div
        className={`${
          isScrolled ? styles.header2 : styles.header
        } font-barlowBold pb-8 pt-8 bg-white font-barlow`}
      >
        <div className="shadow-md px-[60px] font-sans font-normal flex justify-between items-center w-full">
          {/* Logo */}
          <div className={styles.logo}>
            <Link href="/">
              <div className="relative h-[80px] w-[160px]">
                <Image src={Logo} layout="fill" objectFit="contain" />
              </div>
            </Link>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-row items-center">
            <ul className="flex flex-row">
              {tabs.map((tab, index) => (
                <li
                  key={"menu-item" + index}
                  className={`relative cursor-pointer py-8 px-5 border-b-2 2xl:py-8 2xl:px-4 ${
                    index === activeTab
                      ? `border-[#11B6E3] text-[#11B6E3] font-barlow font-bold text-[16px] 2xl:text-[16px] md:text-[1.5rem] lg:text-[1.75rem]
                         ${styles.ActiveTab}`
                      : "border-transparent text-[#9E9E9E] font-barlow font-normal text-[20px] 2xl:text-[16px] md:text-[1.25rem] lg:text-[1.5rem]"
                  } ${isScrolled && index !== activeTab ? "text-white" : ""}`}
                  onClick={() => handleTabClick(index)} // Open or close submenu on click
                >
                  <div className="flex items-center">
                    <Link href={tab.url}>{tab.title}</Link>
                    {tab.subMenu && <span className="ml-2 text-xs">▼</span>}
                  </div>

                  {/* Dropdown Menu */}
                  {tab.subMenu && activeDropdown === index && (
                    <ul className="absolute left-0 top-full mt-1 bg-white shadow-lg z-10 w-[220px] rounded-lg border border-white/20">
                      {tab.subMenu.map((subItem, subIndex) => (
                        <li
                          key={`sub-menu-item-${subIndex}`}
                          className="px-4 py-2 text-[#1E1E1E] font-medium transition-all duration-300 ease-in-out rounded-md cursor-pointer hover:bg-gray-100 hover:text-black"
                        >
                          <Link href={subItem.url}>
                            <span className="block text-[0.875rem] md:text-[1rem] lg:text-[1.125rem]">
                              {subItem.title}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Get Quote Button */}
          <div className="w-[152px] h-[50px] text-white font-barlow font-normal flex justify-center items-center bg-button-gradient rounded-lg text-[1.25rem] md:text-[1.5rem] lg:text-[1.75rem]">
            <Link href="/contact">Get Quote</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headernew;
