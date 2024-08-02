import React, { useEffect, useState } from "react";
import Header from "./Header";
import HamburgerMenu from "./HamburgerMenu";
import UpdateHamburgerMenu from "./UpdateHamburgerMenu";

const Navbar = () => {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  // event listner for mobile and Tablet view
  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div>{isMobileOrTablet ? <UpdateHamburgerMenu /> : <Header />}</div>;
};

export default Navbar;
