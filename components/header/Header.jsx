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
    url: "/blogupdate",
  },

  {
    title: "Contact",
    url: "/contact",
  },
];

const Header = () => {
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
    <div className={`${isScrolled ? styles.header2 : styles.header}`}>
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
                  key={index}
                  className={`cursor-pointer py-5 px-5  border-b-2 text-[16px]  font-[500] font-sans text-[#000]  ${
                    index === activeTab
                      ? "border-[#000]  text-[#000]"
                      : "border-transparent text-[#000]"
                  }
${isScrolled ? "text-[#fff]" : "text-[#000]"}`}
                  onClick={() => handleTabClick(index)}
                >
                  {tab.title}
                </li>
              </Link>
            ))}
          </ul>

          {/* Telephone  Section */}

          <div className={styles.telephone}>
            <div className={styles.Innertelephone}>
              <BsTelephoneFill style={{ color: "white" }} />
              <span
                className={`${styles.telephoneText} text-[#fff] border-r-7 font-900`}
              >
                {" "}
                +971 502 825 433
              </span>
              {/* <Image src={aeroplane} height={30} width={45} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
