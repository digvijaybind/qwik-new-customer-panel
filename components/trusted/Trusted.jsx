import React from 'react';
import Image from 'next/image';
import styles from './Trusted.module.css';

const Trusted = ({ img, title, descripation }) => {
  return (
    <div className={`${styles.Wrapper} font-Inter font-extrabold`}>
      <div className=" w-full flex justify-start items-start gap-8">
        <div className="bg-[#19c0f0] overflow-hidden rounded-full sm:w-15 w-[75px] sm:h-12 h-[65px] flex justify-center items-center cursor-pointer">
          <Image
            src={img}
            className="object-cover sm:!w-[25px] !w-[30px] sm:!h-[25px] !h-[30px]"
            alt={title}
          />
        </div>
        <div className="w-fit flex flex-col gap-3">
          <div className="text-xl sm:text-xl text-[#fff] font-Inter font-semibold">
            {title}
          </div>
          <div className="text-[#d4d3d3] text-[15px] text-wrap sm:text-sm font-medium text-shadow">
            {descripation}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trusted;
