import React, {useEffect, useState} from "react";
import Logo from "../../public/images/logo.svg";
import Image from "next/image";
import styles from "./Header.module.css";
import Telephone from "../../public/images/telephone.svg";
import Link from "next/link";
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
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const tabs = [
    "Home",
    "About",
    "Services",
    "Fleet",
    "Media",
    "Blog",
    "Our Location",
    "Contact",
  ];
  return (
    <div>
      {/* <header className="font-poppins">
        <nav class="bg-white border-gray-200 px-24 sm:px-4 py-4">
          <div class="flex justify-between align-baseline pr-50 pl-50 mb-25 mt-15 sm:pr-0 pl-0 md:pr-25 pl-25">
            <div className={styles.headerMangnement}>
              <Link href="/">
                <img
                  src={"/images/logo.png"}
                  class="mr-3 sm:h-8 h-10"
                  alt="Qwiklif Logo"
                />
              </Link>
            </div>
            <div
              class="sm:hidden md:hidden"
              id="mobile-menu-2"
            >
              <ul class="flex  flex-row my-4 text-lg uppercase text-Bluedark cursor-pointer font-medium  lg:flex-row lg:space-x-8 lg:mt-0">
                <Link href="/about">
                  <li class="block py-2 pr-4 pl-3  hover:text-gray-300">
                    About US
                  </li>
                </Link>
                <a href="#services">
                  <li class="block py-2 pr-4 pl-3  hover:text-gray-300">
                    Services
                  </li>
                </a>
                <Link href="/fleet/Challenger-605">
                  <li class="block py-2 pr-4 pl-3  hover:text-gray-300">
                    Fleet
                  </li>
                </Link>
                <Link href="/location">
                  <li class="block py-2 pr-4 pl-3  hover:text-gray-300">
                    Our Location
                  </li>
                </Link>
                <Link href="/media">
                  <li class="block py-2 pr-4 pl-3  hover:text-gray-300">
                    Media
                  </li>
                </Link>
                <Link href="/contact-us">
                  <li class="block py-2 pr-4 pl-3  hover:text-gray-300">
                    Contact
                  </li>
                </Link>
              </ul>
            </div>
            <button
              class="hidden sm:block focus:outline-none cursor-pointer"
              onClick={toggleSidebar}
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
            <aside
              style={{zIndex: 100000}}
              className={`bg-white text-white h-screen w-64 fixed left-0 top-0 overflow-y-auto transition-transform transform ${
                isSidebarOpen ? "translate-x-0" : "-translate-x-full"
              } md:translate-x-0 md:relative md:static`}
            >
             
              <div className="p-4">
                <ul class="flex  flex-col align-baseline mt-4 text-[24px] text-Bluedark cursor-pointer font-medium">
                  <Link href="/">
                    <li class="block py-2 pr-4 pl-3  hover:text-gray-300">
                      Home
                    </li>
                  </Link>
                  <Link href="/about">
                    <li class="block py-2 pr-4 pl-3  hover:text-gray-300">
                      Company
                    </li>
                  </Link>
                  <Link href="">
                    <li class="block py-2 pr-4 pl-3  hover:text-gray-300">
                      Marketplace
                    </li>
                  </Link>
                  <Link href="">
                    <li class="block py-2 pr-4 pl-3  hover:text-gray-300">
                      Features
                    </li>
                  </Link>
                  <Link href="">
                    <li class="block py-2 pr-4 pl-3  hover:text-gray-300">
                      Team
                    </li>
                  </Link>
                  <Link href="/contact-us">
                    <li class="block py-2 pr-4 pl-3  hover:text-gray-300">
                      Contact
                    </li>
                  </Link>
                </ul>
              </div>
            </aside>
          </div>
        </nav>
      </header> */}
      <header className={`${header} ${styles.shadow} px-[70px]`}>
        <div className={styles.logo}>
          <Image src={Logo} height={100} width={150} />
        </div>
        <div className={`flex flex-row items-center`}>
          <ul className={`flex flex-row`}>
            {/* <li
            className={`cursor-pointer p-4 border-b-2 ${
              index === activeTab ? "border-blue-500" : "border-transparent"
            }`}
            onClick={() => handleTabClick(index)}
          >
            home
          </li> */}
            {/* <li className={styles.linkItem}>about</li>
          <li className={styles.linkItem}>join</li> */}

            {tabs.map((tab, index) => (
              <li
                key={index}
                className={`cursor-pointer py-10 px-5  border-b-2 text-[16px]  font-semibold ${
                  index === activeTab
                    ? "border-[#11b6e3]  text-[#11b6e3]"
                    : "border-transparent text-[#fff]"
                }`}
                onClick={() => handleTabClick(index)}
              >
                {tab}
              </li>
            ))}
          </ul>
          <div className={``}></div>
          <div className={styles.telephone}>
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
      </header>
    </div>
  );
};

export default Header;
