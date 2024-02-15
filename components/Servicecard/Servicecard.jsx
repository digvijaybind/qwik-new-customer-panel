import React from 'react';
import styles from './Servicecard.module.css';
import Image from 'next/image';
const Servicecard = ({ title, description, imageUrl, index }) => {
  return (
    <div class={`px-[20px]  flex flex-col items-center ${styles.boxShadow}`}>
      <div class="w-full relative ">
        <Image
          className="w-full h-full"
          src={imageUrl}
          width={40}
          height={314}
          alt="rapid Time"
          layout="responsive"
        />
        <Image
          className="max-w-[80px] max-h-[80px] absolute bottom-[-40px] left-[50px] border-r-[100%]"
          src="/images/airplane_logo.png"
          width={40}
          height={314}
          alt="rapid Time"
          layout="responsive"
        />
      </div>
      <div className="flex flex-col items-start mt-[80px] gap-[30px]">
        <p className="font-bold leading-[28px] text-[22px] max-w-[20rem] text-[#111111]">
          {title}
        </p>
        <p className="text-[#646464] leading-[28.8px] text-[16px] font-normal max-w-[26rem]">
          {description}
        </p>
        <button className="mb-[30px]">
          <strong className="text-[#396CF0] text-[15px] font-medium leading-[26px]">
            READ MORE {`>`}
          </strong>
        </button>
      </div>
    </div>
  );
};

export default Servicecard;
