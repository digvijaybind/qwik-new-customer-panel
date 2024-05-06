import React from 'react';
import styles from './Selectionbutton.module.css';
const Selectionbutton = ({ selectedTab, handleTabChange }) => {
  return (
    <div className="grid grid-cols-3 gap-12 font-sans">
      <div className="flex flex-col items-start justify-between w-[173px]">
        <div className="text-[12px] font-normal font-sans">
          Select your flight types
        </div>
        <div
          className={`h-[30px] w-[120px]  font-sans text-white font-[900] text-[10px] flex justify-center  items-center text-center rounded bg-gradient-to-r from-green-400 to-green-600 ${styles.backgroundContainer}`}
        >
          ON PRIORITY
        </div>
      </div>
      <div
        className={`commericial-tab h-[55px] w-[173px]  rounded flex justify-center items-center flex-col cursor-pointer  ${
          selectedTab === 'commercial'
            ? 'bg-[#d9ebf1] border-2  border-[#55CDF1]  text-[#55CDF1]'
            : 'border-2 border-[#959494]'
        } `}
        onInput={() => handleTabChange('commercial')}
      >
        <label
          className="mr-4 font-extrabold text-[13px]"
          for="radio1"
          name="radios"
        >
          <input
            type="radio"
            name="tab"
            id="radio1"
            value="commercial"
            checked={selectedTab === 'commercial'}
            onChange={() => handleTabChange('commercial')}
            className={`mr-2 inline-block ${styles.styledRadio} font-bold `}
          />
          Commercial Flights
        </label>
        <p className="text-[#959494] text-[10px] font-sans font-normal ml-6">
          Price will be adjusted
        </p>
      </div>
      <div
        className={`dedicated-tab  h-[55px] w-[173px] ${
          styles.TabButton
        }  rounded flex justify-center items-center flex-col cursor-pointer  ${
          selectedTab === 'dedicated'
            ? 'bg-[#d9ebf1] border-2 border-[#55CDF1] text-[#55CDF1]'
            : 'border-2 border-[#959494]'
        }`}
        onInput={() => handleTabChange('dedicated')}
      >
        <div className="">
          <label
            className="mr-4 font-extrabold text-[13px]"
            for="radio1"
            name="radios"
          >
            <input
              type="radio"
              name="tab"
              value="dedicated"
              checked={selectedTab === 'dedicated'}
              onChange={() => handleTabChange('dedicated')}
              className={`mr-2 inline-block ${styles.styledRadio} font-bold text-[10px]`}
            />
            chartered Flights
          </label>
          <p className="text-[#959494] text-[10px] font-sans font-normal ml-6">
            Price will be adjusted
          </p>
        </div>
      </div>
    </div>
  );
};

export default Selectionbutton;
