import React, { useEffect, useState } from "react";
import Header from "./Header";
import Updatehamburger from "./Updatehamburger";

const Navbar = () => {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(
    window.innerWidth <= 1024
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <div>{isMobileOrTablet ? <Updatehamburger /> : <Header />}</div>;
};

export default Navbar;
