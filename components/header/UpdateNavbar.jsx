import React from 'react';
import HamburgerMenu from './HamburgerMenu';
import { useState } from 'react';
import { useEffect } from 'react';
import Header from './Header';
const UpdateNavbar = () => {
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
    <div className="navbar">{isMobile ? <HamburgerMenu /> : <Header />}</div>
  );
};

export default UpdateNavbar;
