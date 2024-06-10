import UpdateSearch from '@/components/SearchBar/UpdateSearch';
import UpdateSearchNew from '@/components/updatesearch/UpdateSearch';
import React, { useEffect, useState } from 'react';
import styles from './updateSearchresponse.module.css';

const updateSearchresponse = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
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
    <div className="">
      <div
        className="flex justify-center items-center"
        style={{
          backgroundImage: "url('/images/lower_plane.jpeg')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          height: '100vh',
        }}
      >
        <UpdateSearchNew
          className={`relative top-40 ${
            isSticky
              ? `${styles.Searchbar2} flex justify-center items-center `
              : `${styles.Searchbar} flex justify-center items-center `
          } `}
        />
      </div>
      <div className="bg-[#f1f1f1]">
        <div className="bg-[red] w-[300px] h-[200px]"></div>
      </div>
    </div>
  );
};

export default updateSearchresponse;
