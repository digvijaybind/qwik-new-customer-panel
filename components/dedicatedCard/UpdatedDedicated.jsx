import React from 'react';
import styles from './DedicatedCard.module.css';
import Vistara from '../../public/images/airlines/vistara.svg';
import Image from 'next/image';
const UpdatedDedicated = () => {
  return (
    <div
      className={`${styles.cardContainer} w-[570px] h-[185px] border-solid border-[1.5px] border-[#cdcdcd] rounded-lg  cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-103 flex flex-col px-[25px] py-[25px]`}
    >
      <div className="flex flex-col">
        <div className="grid grid-rows-2 gap-8">
          <div className="grid grid-cols-12 grid-rows-1">
            <div className="logo-name col-span-5 flex flex-row">
              <div className="image h-[22px] w-[66px]">
                <Image src={Vistara} alt="vistara" width={50} />
              </div>
              <div className="flex flex-col justify-between">
                <div className="font-bold text-[12px] text-[#323232] font-sans">
                  Vistara
                </div>
                <div className="text-[10px] text-[#959494] font-sans">UK 583,UK 848</div>
              </div>
            </div>
            <div className="time-date col-span-7 flex flex-row justify-between items-center">
              <div className="arrival time flex flex-col items-center text-[#323232] font-extrabold text-[18px] font-sans">
                17:00
                <span className="font-normal text-[12px] text-[#b4b3b3] font-sans">
                  Mumbai
                </span>
              </div>
              <div className="time duration flex flex-col items-center text-[13px] text-[#344056] font-sans">
                4:00hr
                <div className="bg-[#0A7B23] w-[60px] h-[2px]"></div>
              </div>
              <div className="destination time flex flex-col items-center text-[#323232] font-extrabold text-[18px] font-sans">
                20:05
                <span className="font-normal text-[12px] text-[#b4b3b3] font-sans">
                  dubai
                </span>
              </div>
            </div>
          </div>
          <div className=" grid grid-cols-10 grid-rows-1 justify-between items-center">
            <div className="col-span-5 flex flex-col  justify-start font-extrabold text-[18px] text-[#323232] font-sans">
              $ 22,735
              <span className="font-medium text-[10px] text-[#323232] font-sans">
                Fight/patient
              </span>
            </div>
            <div className="col-span-5 flex justify-end">
              <button className="w-[119px] h-[32px] bg-[#55CDF1] rounded-full font-extrabold text-[12px] text-[#fff] font-sans">
                Book Now
              </button>
            </div>
          </div>
          <div className="">
            <div className=""></div>
            <div className="font-normal">View Flight Details</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatedDedicated;
