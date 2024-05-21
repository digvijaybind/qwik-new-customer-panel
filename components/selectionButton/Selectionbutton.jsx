import React from 'react';
import styles from './Selectionbutton.module.css';

const Selectionbutton = ({ selectedTab, handleTabChange }) => {
  return (
    <div className="grid grid-cols-2 gap-12 font-sans">
      <div className="flex flex-col items-start justify-between w-auto">
        <div className="text-[12px] font-black font-sans ">
          Book commercial airline stretcher And Charter plane stretcher
        </div>
        <div
          className={`h-[30px] w-auto  font-sans text-white font-[900] text-[10px] flex justify-center  items-center text-center rounded bg-gradient-to-r from-green-400 px-[10px]  to-green-600 ${styles.backgroundContainer}`}
        >
          Click on each to know estimate price
        </div>
      </div>
      <div className="flex justify-between">
        <div
          className={`commericial-tab h-[55px] w-[230px]  rounded-lg flex justify-center items-center flex-col cursor-pointer bg-[#fff]  mr-4 ${
            selectedTab === 'commercial'
              ? 'bg-[#fff] border-2  border-[#55CDF1]  text-[#55CDF1] transition-colors duration-300 hover:bg-[#f0f8ff]'
              : 'border-2 border-[#55CDF1] hover:bg-gray-100 transition-colors duration-300'
          } `}
          onClick={() => handleTabChange('commercial')}
        >
          <div className="flex flex-row items-center">
            <input
              type="radio"
              name="tab"
              id="radio1"
              value="commercial"
              checked={selectedTab === 'commercial'}
              onChange={() => handleTabChange('commercial')}
              className={`mr-2 inline-block ${styles.styledRadio} font-bold `}
            />
            <div className="flex flex-col">
              <label
                className="mr-4 font-extrabold text-[13px]"
                htmlFor="radio1"
                name="radios"
              >
                Commercial Flights
              </label>
              <p className="text-[#959494] text-[10px] font-sans font-normal ml-6">
                Price will be adjusted
              </p>
            </div>
          </div>
        </div>
        <div
          className={`dedicated-tab  h-[55px] w-[230px] ${
            styles.TabButton
          }  rounded-lg flex justify-center items-center flex-col cursor-pointer bg-[#fff]  ${
            selectedTab === 'dedicated'
              ? 'bg-[#fff] border-2 border-[#55CDF1] text-[#55CDF1] transition-colors duration-300 hover:bg-[#f0f8ff]'
              : 'border-2 border-[#55CDF1] hover:bg-gray-100 transition-colors duration-300'
          }`}
          onClick={() => handleTabChange('dedicated')}
        >
          <div className="flex flex-row items-center">
            <input
              type="radio"
              name="tab"
              value="dedicated"
              checked={selectedTab === 'dedicated'}
              onChange={() => handleTabChange('dedicated')}
              className={`mr-2 inline-block ${styles.styledRadio} font-bold text-[10px]`}
            />
            <div className="flex flex-col">
              <label
                className="mr-4 font-extrabold text-[13px]"
                htmlFor="radio1"
                name="radios"
              >
                Chartered Flights
              </label>
              <p className="text-[#959494] text-[10px] font-sans font-normal ml-6">
                Price will be adjusted
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Selectionbutton;
