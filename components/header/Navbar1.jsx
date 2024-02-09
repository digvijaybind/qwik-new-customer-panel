import React, {useState, useEffect} from "react";
import Menu from "./Menu";
import HamburgerMenu from "./HamburgerMenu";
import Header from "./Header";
import HamburgerMenu1 from "./hamburgerMenu1";
import HamburgerMenu2 from "./HamburgerMenu2";

const Navbar1 = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000); // Change threshold as needed
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call once to set initial state

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="navbar">{isMobile ? <HamburgerMenu /> : <Header />}</nav>
  );
};

export default Navbar1;
