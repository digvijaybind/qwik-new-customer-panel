import React from "react";
import Image from "next/image";



const NewsUpdates = ({ title, description, imageUrl, index, Date, Role }) => {
  return (
    <div
      className={`mx-[10px] sm:mx-1 flex flex-col items-center border px-3 py-2 sm:px-1 sm:py-1 rounded-lg font-sans cursor-pointer shadow-md`}
    >
      <div className="w-full overflow-hidden rounded-t">
        <img
          className="w-full aspect-[16/13] object-cover object-center"
          src={imageUrl}
          alt={title}
          layout="responsive"
        />
      </div>
      <div className="flex flex-col  p-4 items-center mt-2.5 gap-3">
        <div className="w-full flex flex-row items-center justify-Start gap-[10px]">
          <Image
            className="w-[20px] h-[20px]"
            src="/images/calender_icon.png"
            width={40}
            height={40}
            alt="rapid Time"
            layout="contain"
          />
          <h3 className="text-[#6C6C6C] font-sans text-center font-medium sm:font-medium text-[14px] leading-[26px]">
            {Date}
          </h3>
        </div>
        <p className="font-sans font-semibold text-center text-xl text-slate-800    max-w-[30rem]">
          {title}
        </p>
        <p
          className="text-[#646464] text-center font-poppins  text-sm  font-medium  sm:text-base
         sm:font-medium  max-w-[26rem]"
        >
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
            <h3 className="text-[#6C6C6C] font-Inter font-normal text-[16px] sm:text-[16px]  leading-[26px]">
              {Role}
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
            <h3 className="text-[#6C6C6C] font-normal font-Inter text-[16px] sm:text-[16px] leading-[26px]">
              Comment: 1
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsUpdates;
