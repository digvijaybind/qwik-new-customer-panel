import React, {useEffect, useState} from "react";
import Header from "./Header";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
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
  return <div class="">{isMobile ? <HamburgerMenu /> : <Header />}</div>;
};

export default Navbar;
