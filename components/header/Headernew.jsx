import React, { useEffect } from "react";
import Logo from "../../public/images/Logo.png";
import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";
import { useState } from "react";
import { BsTelephoneFill } from "react-icons/bs";

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
    <div
      className={`${isScrolled ? styles.header : styles.header} font-barlowBold pb-5 pt-5 bg-[#fff] `}
    >
      <div
        className={` ${styles.shadow}   px-[50px] font-sans font-normal flex justify-between items-center flex-row w-full`}
      >
        {/* Logo */}

        <div className={styles.logo}>
          <Link href="/">
            <div className="relative h-[60px] w-[150px]">
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
              <Link href={tab.url} key={"menu-item" + index}>
                <li
                  className={`cursor-pointer py-5 px-5 border-b-2  ${
                    index === activeTab
                      ? "border-[#11B6E3] text-[#11B6E3] font-barlowBold text-[20px]"
                      : "border-transparent text-[#9E9E9E] font-barlowRegular text-[18px]"
                  } ${isScrolled && index !== activeTab ? "text-[#fff]" : ""}`}
                  onClick={() => handleTabClick(index)}
                >
                  {tab.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        {/* get quote */}
        <div className="w-[152px] h-[60px] bg-[#10A7D1] text-[#fff] font-barlowSemiBold flex justify-center items-center text-[24px] rounded-[5px]">
          Get Quote
        </div>
      </div>
    </div>
  );
};

export default Headernew;
