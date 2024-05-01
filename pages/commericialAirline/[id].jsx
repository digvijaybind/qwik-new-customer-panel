'use client';
import React from 'react';
import styles from './commericialAirline.module.css';
import Arrow from '@/components/Utils/arrow/Arrow';
import Image from 'next/image';
import Signature from '../../public/images/Signature.svg';

const TravelDuration = () => {
  <div className="w-[881px] h-[415px] border-2 border-[#D9D9D9] px-[20px] py-[20px] flex flex-col">
    <div className="flex justify-between">
      <div className="Location-time">
        <div className="">
          <span className="text-[#323232] font-sans text-[12px] font-extrabold">
            Mumbai
          </span>
          <span className="">
            {' '}
            <Arrow style={{ color: '#323232', fontWeight: 'normal' }} />
          </span>
          <span className="text-[#323232] font-sans text-[12px] font-extrabold">
            Dubai
          </span>
        </div>
        <div className="">
          <div className=" h-[26px] w-[116px] bg-[#FEE9C5] text-[#323232] font-sans text-[12px] font-semibold">
            {' '}
            Saturday Apr 22
          </div>
          <div className="">Non Stop - 2h 10m</div>
        </div>
      </div>

      <div className="Book-priority"></div>
    </div>
    <div className="flex justify-between"></div>
    <div className=""></div>
    <div className=""></div>
  </div>;
};

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
      <Image src={Signature} alt='Qwiklif CEO' width={200} height={125} />
    </div>
    <div className="font-extrabold text-[12px] font-sans">CEO , QWIKLIF</div>
  </div>;
};

const CommercialAirline = () => {
  return (
    <div className="px-[15px]">
      <div className={`${styles.Section1_Container} w-full`}></div>
      <div className="grid grid-cols-2 gap-10 px-[10px] py-[10px]">
        <div className="bg-[#fff] rounded-md">
          {/* <TravelDuration /> */}
          {/* <Guarantee /> */}

          <Guarantee />
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default CommercialAirline;
