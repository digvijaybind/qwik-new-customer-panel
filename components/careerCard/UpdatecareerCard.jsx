import React from 'react';
import styles from './UpdatecareerCard.module.css';
import Image from 'next/image';
const UpdatecareerCard = ({ image, height, width, headline, descripation }) => {
  return (
    <div className="flex flex-col  sm:flex-col  items-center sm:justify-center shadow-md bg-white rounded-[10px] px-[15px] py-[15px] cursor-pointer  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105  duration-300 font-sans">
      {/* <div
        className={`grid grid-cols-2 gap-5 items-center ${styles.Container}`}
      >
        <div className={`image ${styles.ImageContainer} `}>
          <Image src={image} height={height} width={width} />
        </div>
        <div
          className={`headline ${styles.headlineContainer} text-[13px] sm:text-center text-[#111] py-[5px] font-bold font-sans`}
        >
          {headline}
        </div>
      </div> */}
      <div className="grid grid-cols-2 gap-10">
        <Image src={image} height={height} width={width} />
        <div
          className={`text-[16px] sm:text-center text-[#111] py-[5px] font-bold font-sans`}
        >
          {headline}
        </div>
      </div>
      <div
        className={`font-sans descripation mt-2 ${styles.Descripation} text-[13px]`}
      >
        {descripation}
      </div>
      <button className="border-[#396CF0] mt-[20px] mb-[10px] sm:ml-[50%] sm:transform sm:translate-x-[-50%] border-[1px] px-[10px] py-[5px] rounded-[5px] font-sans">
        <p className="text-[#396CF0] font-[600] font-sans">{`Apply Now >`}</p>
      </button>
    </div>
  );
};

export default UpdatecareerCard;
