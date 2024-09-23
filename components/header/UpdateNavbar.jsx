import React from 'react';
import HamburgerMenu from './HamburgerMenu';
import { useState } from 'react';
import { useEffect } from 'react';
import Header from './Header';
import Headernew from './Headernew';
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
    <div className="navbar">{isMobile ? <HamburgerMenu /> : <Headernew />}</div>
  );
};

export default UpdateNavbar;
