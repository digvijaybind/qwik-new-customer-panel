import React from 'react';
import styles from './Servicecard.module.css';
import Image from 'next/image';
import ForwardSlash from '../../public/images/ForwardSlash.svg';
const Servicecard = ({ title, description, imageUrl, index }) => {
  return (
    <div
      className={`transition ease-in-out delay-90  hover:-translate-y-1 hover:scale-110  flex flex-col items-center shadow-2xl py-[10px] px-[10px] ${styles.boxShadow} hover:text-[#007bff] cursor-pointer hover:shadow-xl hover:z-[999999999999] font-sans`}
    >
      <div className="w-full relative ">
        <Image
          className="w-full h-full hover:scale-60 transition duration-500 cursor-pointer"
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
        <p className="font-semibold leading-[28px] text-[20px] max-w-[20rem] text-slate-600">
          {title}
        </p>
        <p className="text-[#646464] text-[10px] font-normal max-w-[26rem]">
          {description}
        </p>
        <button className="mb-[30px]">
          <strong className="text-[#396CF0] text-[15px]  leading-[26px] flex flex-row  items-center font-semibold">
            READ MORE{' '}
            <span>
              <Image
                src={ForwardSlash}
                height={7}
                width={7}
                className="ml-3"
                alt=""
              />
            </span>
          </strong>
        </button>
      </div>
    </div>
  );
};

export default Servicecard;
