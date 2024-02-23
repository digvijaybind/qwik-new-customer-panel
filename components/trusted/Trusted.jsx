import React from 'react';
import styles from './Trusted.module.css';
import Image from 'next/image';
const Trusted = ({ img, title, descripation }) => {
  return (
    <div className={`${styles.Wrapper}`}>
      <div class="grid grid-cols-6 gap-2">
        <div className="bg-[#396CF0] rounded-full w-[70px] h-[70px] flex justify-center col-span-1 cursor-pointer">
          <Image src={img} height={40} width={40} />
        </div>
        <div class="flex flex-col col-span-5">
          <div class="text-[22px] text-[#fff] font-bold">{title}</div>
          <div class="text-[#a9b5bf] text-[16px] font-[400]">
            {descripation}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trusted;
