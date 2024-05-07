import React from 'react';
import styles from './UpdateMobiletab.module.css';
const UpdateMobiletab = ({ selectedTab, handleTabChange }) => {
  return (
    <div
      className={`${styles.Container} flex justify-between shadow-2xl rounded-md bg-[#fff] overflow-hidden`}
    >
      <button
        className={` hover:bg-[#68D2F3] text-center   focus:outline-none focus:ring-2  h-10 text-sm font-bold px-2 rounded-md ${
          selectedTab === 'commercial'
            ? 'text-gray-900 shadow-md bg-[#68D2F3] '
            : 'text-gray-900'
        }`}
        onClick={() => handleTabChange('commercial')}
      >
        Commercial Flights
      </button>

      <button
        className={` hover:bg-[#68D2F3] text-center  focus:outline-none focus:ring-2   h-10 text-sm font-bold px-2 rounded-md ${
          selectedTab === 'dedicated'
            ? 'text-gray-900 shadow-md bg-[#68D2F3]'
            : 'text-gray-900'
        }`}
        onClick={() => handleTabChange('dedicated')}
      >
        Charter Flights
      </button>
    </div>
  );
};

UpdateMobiletab.defaultProps = {
  selectedTab: 'commercial', // Set the default selected tab to 'commercial'
};

export default UpdateMobiletab;
