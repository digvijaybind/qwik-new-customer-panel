import React from 'react';
import styles from './UpdateMobiletab.module.css';
const Updatemobiletab = ({ selectedTab, handleTabChange }) => {
  return (
    <div
      className={`${styles.Container} flex justify-between shadow-lg rounded-md overflow-hidden`}
    >
      <button
        className={`bg-white hover:bg-[#68D2F3] text-center  focus:outline-none focus:ring-2 focus:ring-[#12B5E4] h-10 text-sm font-bold px-2 rounded-md ${
          selectedTab === 'commercial'
            ? 'text-gray-900 shadow-md'
            : 'text-gray-900'
        }`}
        onClick={() => handleTabChange('commercial')}
      >
        Commercial Flights
      </button>
<div className="absolute inset-y-0 right-0 w-1 bg-gray-300"></div>
      <button
        className={`bg-white hover:bg-[#68D2F3] text-center  focus:outline-none focus:ring-2 focus:ring-[#12B5E4]  h-10 text-sm font-bold px-2 rounded-md ${
          selectedTab === 'dedicated'
            ? 'text-gray-900 shadow-md'
            : 'text-gray-900'
        }`}
        onClick={() => handleTabChange('dedicated')}
      >
        Charter Flights
      </button>
    </div>
  );
};

export default Updatemobiletab;
