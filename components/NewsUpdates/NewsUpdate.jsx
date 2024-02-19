import React from 'react';
import styles from './NewsUpdate.module.css';
import Image from 'next/image';
const NewsUpdates = ({ title, description, imageUrl, index }) => {
  return (
    <div
      class={`mx-[10px]  flex flex-col items-center ${styles.boxShadow} p-[30px] shadow-2xl`}
    >
      <div class="w-full ">
        <Image
          className="w-full h-full"
          src={imageUrl}
          width={40}
          height={314}
          alt="rapid Time"
          layout="responsive"
        />
      </div>
      <div className="flex flex-col items-start sm:items-center mt-[80px] gap-[30px]">
        <div className="flex flex-row items-center justify-start gap-[10px]">
          <Image
            className="w-[20px] h-[20px]"
            src="/images/calender_icon.png"
            width={40}
            height={40}
            alt="rapid Time"
            layout="contain"
          />
          <h3 className="text-[#6C6C6C] font-medium text-[14px] leading-[26px]">
            November 15, 2018
          </h3>
        </div>
        <p className="font-bold leading-[33.6px] text-[24px] max-w-[20rem] text-[#111111]">
          {title}
        </p>
        <p className="text-[#646464] leading-[28.8px] text-[16px] font-normal max-w-[26rem]">
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
            <h3 className="text-[#6C6C6C] font-normal text-[16px] leading-[26px]">
              Comment: 1
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsUpdates;
