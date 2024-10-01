import React from "react";
import HamburgerMenu from "./HamburgerMenu";
import { useState } from "react";
import { useEffect } from "react";
import Header from "./Header";
import Headernew from "./Headernew";
import TopBanner from "../Utils/TopBanner";
import styles from "./Updatehamburger.module.css"
const UpdateNavbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {/* Step 1: Place the TopBanner component first */}
      <TopBanner />

      {/* Step 2: Add the Header or Hamburger Menu component */}
      <div className={styles.navbar}>
        {isMobile ? <HamburgerMenu /> : <Headernew />}
      </div>

      {/* Step 3: Other content goes here */}
      <main>{/* Your main content here */}</main>
    </div>
  );
};

export default UpdateNavbar;
