import React from 'react';
import styles from './DedicatedCard.module.css';
import Vistara from '../../public/images/airlines/vistara.svg';
import Image from 'next/image';
import LockIcon from '../Utils/lock/LockIcon';
import Arrow from '../Utils/arrow/Arrow';
const UpdatedDedicated = () => {
  return (
    <div
      className={`${styles.cardContainer} w-[590px] h-[210px] border-solid border-[1.5px] border-[#cdcdcd] rounded-lg  cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-103 flex flex-col px-[25px] py-[10px] sm:w-[300px] sm:h-[250px] sm:px-[5px] sm:py-[5px]`}
    >
      <div className="flex flex-col">
        <div className="grid grid-rows-2 gap-8 sm:gap-2 sm:grid-rows-[1.5] sm:items-center ">
          <div className="grid grid-cols-12 grid-rows-1 sm:grid-cols-1 sm:gap-y-5 sm:items-baseline sm:justify-start">
            <div className="logo-name col-span-5 flex flex-row sm:col-span-10">
              <div className="image h-[22px] w-[66px]">
                <Image src={Vistara} alt="vistara" width={50} />
              </div>
              <div className="flex flex-col justify-between">
                <div className="font-bold text-[12px] text-[#323232] font-sans">
                  Vistara
                </div>
                <div className="text-[10px] text-[#959494] font-sans">
                  UK 583,UK 848
                </div>
              </div>
            </div>
            <div className="time-date col-span-7 flex flex-row justify-around items-center sm:col-span-3 sm:justify-between">
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
            {/* <div className="time-date col-span-7 flex flex-col justify-center items-center sm:flex-row sm:col-span-5">
              <div className="flex flex-col items-center text-[#323232] font-extrabold text-[18px] font-sans mb-2 sm:mb-0">
                <div>17:00</div>
                <div className="font-normal text-[12px] text-[#b4b3b3] font-sans">
                  Mumbai
                </div>
              </div>
              <div className="flex flex-col items-center text-[13px] text-[#344056] font-sans mx-2 sm:mx-0">
                <div>4:00hr</div>
                <div className="bg-[#0A7B23] w-[60px] h-[2px] mt-2 sm:hidden"></div>
              </div>
              <div className="flex flex-col items-center text-[#323232] font-extrabold text-[18px] font-sans">
                <div>20:05</div>
                <div className="font-normal text-[12px] text-[#b4b3b3] font-sans">
                  Dubai
                </div>
              </div>
            </div> */}
          </div>

          <div className=" grid grid-cols-10 justify-between items-center sm:flex sm:justify-between">
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
          <div className="flex justify-between items-baseline">
            <div className="grid-cols-8 h-[34px] w-[292px]  lg:bg-[#b5deea] xl:bg-[#b6e1ed] 2xl:bg-[#a4d1de] rounded-md  flex justify-around items-center flex-row px-[5px] py-[15px] sm:bg-transparent">
              <LockIcon />
              <p className="text-[#12B5E4] text-[12px] font-sans font-bold">
                Pay 20% and reserve your seat now
              </p>
              <Arrow />
            </div>
            <div className="grid-cols-4 font-normal text-[10px] font-sans sm:hidden">
              View Flight Details
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatedDedicated;
