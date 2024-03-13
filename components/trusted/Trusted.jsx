import React from 'react';
import styles from './Trusted.module.css';
import Image from 'next/image';
const Trusted = ({ img, title, descripation }) => {
  return (
    <div className={`${styles.Wrapper}`}>
      <div class="grid grid-cols-6 gap-2">
        <div className="bg-[#396CF0] rounded-full sm:w-[40px] w-[70px] sm:h-[40px] h-[70px] flex justify-center items-center col-span-1 cursor-pointer">
          <Image src={img} className='object-cover sm:w-[25px] w-[30px] sm:h-[25px] h-[30px]' />
        </div>
        <div class="flex flex-col col-span-5">
          <div class="text-[22px] text-[#fff] font-bold">{title}</div>
          <div class="text-[#a9b5bf] text-[16px] font-[400] text-shadow">
            {descripation}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trusted;
