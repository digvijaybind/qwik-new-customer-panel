import React from 'react';
import { useState, useEffect } from 'react';
import Loader from '../loader/Loader';

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return <div>{loading ? <Loader /> : children}</div>;
};

export default Layout;
