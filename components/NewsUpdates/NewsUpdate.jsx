import React from 'react';
import styles from './NewsUpdate.module.css';
import Image from 'next/image';
const NewsUpdates = ({ title, description, imageUrl, index }) => {
  return (
    <div
      className={`mx-[10px]  flex flex-col items-center ${styles.boxShadow} p-[30px] shadow-2xl rounded-md font-sans`}
    >
      <div className="w-full ">
        <img
          className="w-full aspect-[16/13] object-cover object-center"
          src={imageUrl}
          alt="rapid Time"
          layout="responsive"
        />
      </div>
      <div className="flex flex-col items-start sm:items-center mt-10 gap-[30px]">
        <div className="flex flex-row items-center justify-start gap-[10px]">
          <Image
            className="w-[20px] h-[20px]"
            src="/images/calender_icon.png"
            width={40}
            height={40}
            alt="rapid Time"
            layout="contain"
          />
          <h3 className="text-[#6C6C6C] font-sans font-medium text-[14px] leading-[26px]">
            November 15, 2018
          </h3>
        </div>
        <p className="font-sans font-extrabold text-2xl text-slate-800 max-w-[20rem]">
          {title}
        </p>
        <p className="text-[#646464] font-sans font-extrabold  leading-[28.8px] text-[16px] font-normal max-w-[26rem]">
          {description}
        </p>
        <div className="flex flex-row items-center justify-between gap-[10px] w-full">
          <div className="flex flex-row items-center justify-start gap-[10px]">
            <Image
              className="w-[20px] h-[20px]"
              src="/images/admin_icon.png"
              width={40}
              height={40}
              alt="rapid Time"
              layout="contain"
            />
            <h3 className="text-[#6C6C6C] font-normal text-[16px] leading-[26px]">
              admin
            </h3>
          </div>
          <div className="flex flex-row items-center justify-start gap-[10px]">
            <Image
              className="w-[20px] h-[20px]"
              src="/images/comment_icon.png"
              width={40}
              height={40}
              alt="rapid Time"
              layout="contain"
            />
            <h3 className="text-[#6C6C6C] font-normal font-sans text-[16px] leading-[26px]">
              Comment: 1
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsUpdates;
