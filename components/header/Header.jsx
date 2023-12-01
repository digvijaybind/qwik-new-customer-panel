import React, {useState} from "react";
import styles from "./Header.module.css";
import Logo from "../../public/images/logo.svg";
import Image from "next/image";
const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div>
      <header>
        <nav class="bg-white border-gray-200 px-4 lg:px-20 py-2.5 sm:px-4 py-4 md:px-2 py-2">
          <div class="flex justify-between align-baseline pr-50 pl-50 mb-25 mt-15 sm:pr-0 pl-0 md:pr-25 pl-25">
            <div className={styles.headerMangnement}>
              <Image
                src={Logo}
                class="mr-3 h-6 sm:h-9"
                width={110}
                height={63}
                alt="Flowbite Logo"
              />

              {/* <div class="flex items-center lg:order-2">
              <a
                href="#"
                class="text-gray-800  hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none "
              >
                Log in
              </a>
              <a
                href="#"
                class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none "
              >
                Get started
              </a>
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 "
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <svg
                  class="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div> */}
            </div>
            <div
              // class="flex flex-col justify-around  w-full"
              class="sm:hidden md:hidden"
              id="mobile-menu-2"
            >
              <ul class="flex  flex-row mt-4 text-[24px] text-Bluedark cursor-pointer font-medium  lg:flex-row lg:space-x-8 lg:mt-0">
                <li class="block py-2 pr-4 pl-3  hover:text-gray-300">Home</li>
                <li class="block py-2 pr-4 pl-3  hover:text-gray-300">
                  Company
                </li>
                <li class="block py-2 pr-4 pl-3  hover:text-gray-300">
                  Marketplace
                </li>
                <li class="block py-2 pr-4 pl-3  hover:text-gray-300">
                  Features
                </li>
                <li class="block py-2 pr-4 pl-3  hover:text-gray-300">Team</li>
                <li class="block py-2 pr-4 pl-3  hover:text-gray-300">
                  Contact
                </li>
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
            {/* Sidebar */}
            <aside
              className={`bg-white text-white h-screen w-64 fixed left-0 top-0 overflow-y-auto transition-transform transform ${
                isSidebarOpen ? "translate-x-0" : "-translate-x-full"
              } md:translate-x-0 md:relative md:static`}
            >
              {/* Sidebar Content */}
              <div className="p-4">
                <ul class="flex  flex-col align-baseline mt-4 text-[24px] text-Bluedark cursor-pointer font-medium">
                  <li class="block py-2 pr-4 pl-3  hover:text-gray-300">
                    Home
                  </li>
                  <li class="block py-2 pr-4 pl-3  hover:text-gray-300">
                    Company
                  </li>
                  <li class="block py-2 pr-4 pl-3  hover:text-gray-300">
                    Marketplace
                  </li>
                  <li class="block py-2 pr-4 pl-3  hover:text-gray-300">
                    Features
                  </li>
                  <li class="block py-2 pr-4 pl-3  hover:text-gray-300">
                    Team
                  </li>
                  <li class="block py-2 pr-4 pl-3  hover:text-gray-300">
                    Contact
                  </li>
                </ul>
                {/* Add your sidebar links or content here */}
              </div>
            </aside>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
