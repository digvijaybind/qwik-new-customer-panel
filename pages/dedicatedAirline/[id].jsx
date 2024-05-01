'use client';
import React from 'react';
import styles from './dedicatedAirline.module.css';
import Image from 'next/image';
import Arrow from '@/components/Utils/arrow/Arrow';
import Signature from '../../public/images/Signature.svg';

const Guarantee = () => {
  <div className="flex justify-center flex-col  items-center px-[20px] py-[25px] border-2 border-[#D9D9D9] rounded-md">
    <div className="font-black text-[16px] font-sans">OUR GUARANTEE</div>
    <div className="font-sans text-[12px] font-medium mt-3">
      We Guarantee that when choosing Qwiklif, your loved ones shall be treated
      with professional and compassionate care. We consider every patient as
      family, we strive to perfection and continuously monitoring our
      operations. When choosing A provider, Remember that Qwiklif Air ambulance
      is World First air ambulance service provider giving instant quotation.
    </div>
    <div>
      <Image src={Signature} width={200} height={125} />
    </div>
    <div className="font-extrabold text-[12px] font-sans">CEO , QWIKLIF</div>
  </div>;
};

const DedicatedAirline = () => {
  return (
    <div className={`${styles.Container}`}>
      <div className={`${styles.Section1_Container} w-full`}></div>
      <div className="grid grid-cols-2 gap-10 px-[10px] py-[10px]">
        <div className="bg-[#fff] rounded-md">
          <Guarantee />
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default DedicatedAirline;
