import React from 'react';
import Image from 'next/image';
import styles from './Trusted.module.css';

const Trusted = ({ img, title, descripation }) => {
  return (
    <div className={`${styles.Wrapper} font-sans font-extrabold`}>
      <div className=" w-full flex justify-start items-start gap-8">
        <div className="bg-[#396CF0] overflow-hidden rounded-full sm:w-15 w-[70px] sm:h-12 h-[70px] flex justify-center items-center cursor-pointer">
          <Image
            src={img}
            className="object-cover sm:!w-[25px] !w-[30px] sm:!h-[25px] !h-[30px]"
            alt={title}
          />
        </div>
        <div className="w-fit flex flex-col gap-2">
          <div className="text-2xl sm:text-xl text-[#fff] font-bold">
            {title}
          </div>
          <div className="text-[#a9b5bf] text-lg text-wrap sm:text-sm font-normal text-shadow">
            {descripation}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trusted;
