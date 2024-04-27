'use client';
import React from 'react';
import styles from './commericialAirline.module.css';
import Arrow from '@/components/Utils/arrow/Arrow';

const TravelDuration = () => {
  <div className="w-[881px] h-[415px] border-2 border-[#D9D9D9] px-[20px] py-[20px] flex flex-col">
    <div className="flex justify-between">
      <div className="Location-time">
        <div className="">
          <span className="text-[#323232] font-sans text-[12px] font-extrabold">
            Mumbai
          </span>
          <span className="">
            {' '}
            <Arrow style={{ color: '#323232', fontWeight: 'normal' }} />
          </span>
          <span className="text-[#323232] font-sans text-[12px] font-extrabold">
            Dubai
          </span>
        </div>
        <div className="">
          <div className=" h-[26px] w-[116px] bg-[#FEE9C5] text-[#323232] font-sans text-[12px] font-semibold">
            {' '}
            Saturday Apr 22
          </div>
          <div className="">Non Stop - 2h 10m</div>
        </div>
      </div>

      <div className="Book-priority"></div>
    </div>
    <div className="flex justify-between"></div>
    <div className=""></div>
    <div className=""></div>
  </div>;
};

const CommercialAirline = () => {
  return (
    <div className={`${styles.Container} `}>
      {/* <div className="bg-[#68D2F3] h-[300px]"></div>
     

      <div className="bg-[#fff]  grid grid-cols-2 shadow-2xl gap-5 px-[30px] py-[25px] ">
        <div className="Main-cost">
        
        </div>

        <div className="reverse and pay now"></div>
      </div> */}
      <TravelDuration />
    </div>
  );
};

export default CommercialAirline;
