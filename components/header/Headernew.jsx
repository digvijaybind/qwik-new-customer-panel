import React, { useEffect } from "react";
import Logo from "../../public/images/Logo.png";
import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";
import { useState } from "react";
import { BsTelephoneFill } from "react-icons/bs";
import TopBanner from "../Utils/TopBanner";

//Navigation Tabs
const tabs = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Services",
    url: "/services",
    subMenu: [
      {
        title: "Neonatal and Pediatric Air Transfer Services",
        url: "/services/web-development",
      },
      {
        title: "ECMO Initiation and Air Transfer Services",
        url: "/services/mobile-app-development",
      },
      { title: "Dedicated Air Ambulance", url: "/services/digital-marketing" },
      { title: "International Patient Transfer", url: "/services/seo" },
      { title: "Commercial Stretcher Transfer", url: "/services/seo" },
    ],
  },
  {
    title: "Our Location",
    url: "/location",
  },
  {
    title: "Media",
    url: "/media",
  },
  {
    title: "Partner with us",
    url: "/workwithus",
  },
  {
    title: "Blog",
    url: "/blogs",
  },
  {
    title: "Contact",
    url: "/contact",
  },
];

const Headernew = () => {
  //state for active and scroll position

  const [activeTab, setActiveTab] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("static");
  const [activeDropdown, setActiveDropdown] = useState();

  //Handle tab click
  const handleTabClick = (index) => {
    setActiveTab(index);
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
        className={`${isScrolled ? styles.header2 : styles.header} font-barlowBold pb-5 pt-5 bg-white `}
      >
        <div className="shadow-md px-[50px] font-sans font-normal flex justify-between items-center w-full">
          {/* Logo */}
          <div className={styles.logo}>
            <Link href="/">
              <div className="relative h-[60px] w-[150px]">
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
                  className={`relative cursor-pointer py-8 px-5 border-b-2 ${
                    index === activeTab
                      ? "border-[#11B6E3] text-[#11B6E3] font-barlowBold text-[20px]"
                      : "border-transparent text-[#9E9E9E] font-barlowRegular text-[16px]"
                  } ${isScrolled && index !== activeTab ? "text-white" : ""}`}
                  onClick={() => handleTabClick(index)}
                  onMouseEnter={() => setActiveDropdown(index)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="flex items-center">
                    <Link href={tab.url}>{tab.title}</Link>
                    {tab.subMenu && (
                      <span className="ml-2 text-xs">
                        ▼ {/* Replace with an icon if needed */}
                      </span>
                    )}
                  </div>

                  {/* Dropdown Menu */}
                  {tab.subMenu && activeDropdown === index && (
                    <ul className="absolute left-0 top-full mt-1 bg-white shadow-lg z-10 w-[220px] rounded-lg border border-white/20">
                      {tab.subMenu.map((subItem, subIndex) => (
                        <li
                          key={`sub-menu-item-${subIndex}`}
                          className="px-4 py-2 text-[#1E1E1E] font-medium transition-all duration-300 ease-in-out rounded-md cursor-pointer hover:bg-white hover:text-black"
                        >
                          <Link href={subItem.url}>
                            <span className="block text-[14px]">
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
          <div className="w-[152px] h-[60px] bg-button-gradient text-white font-barlowSemiBold flex justify-center items-center text-[24px] rounded-[5px]">
            <Link href="/contact">Get Quote</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headernew;
