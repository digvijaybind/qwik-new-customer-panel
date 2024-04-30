import React, { useState, useEffect } from 'react';
import HamburgerMenu from './HamburgerMenu';
import Header from './Header';

const Navbar1 = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="navbar">
      {isMobile ? <HamburgerMenu /> : null}
      {!isMobile ? <Header /> : null}
    </nav>
  );
};

export default Navbar1;
