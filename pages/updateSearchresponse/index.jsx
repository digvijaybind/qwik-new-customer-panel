import UpdateSearch from '@/components/SearchBar/UpdateSearch';
import UpdateSearchNew from '@/components/updatesearch/UpdateSearch';
import React, { useEffect, useState } from 'react';
import styles from './updateSearchresponse.module.css';
import MobileSearch from '@/components/mobileSearch/MobileSearch';

const updateSearchresponse = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      setLastScrollY(window.scrollY);
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-[#f1f1f1] flex flex-col">
      <div
        className="flex justify-center items-center "
        style={{
          backgroundImage: "url('/images/lower_plane.jpeg')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '65vh',
        }}
      >
        {!isMobile ? (
          <UpdateSearchNew
            className={`relative top-40 ${
              isSticky
                ? `${styles.Searchbar2} flex justify-center items-center `
                : `${styles.Searchbar} flex justify-center items-center `
            } `}
          />
        ) : (
          <div className="relative top-20">
            <MobileSearch />
          </div>
        )}
      </div>
      <div className="flex justify-center relative bottom-16">
        <div className="w-[750px] h-[150px] bg-[#fff] shadow-xl rounded-md"></div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default updateSearchresponse;
