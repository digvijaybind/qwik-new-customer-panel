import React from 'react';
import Image from 'next/image';
import CountUp from 'react-countup';
import MiniAeroplane from '../../public/images/counter/aeroplane.png';
import Miniaircraft from '../../public/images/counter/aeroplane2.png';
import Doctor from '../../public/images/counter/doctor.png';
import Miniglobal from '../../public/images/counter/global.png';
import Link from 'next/link';

const FastestMedical = () => {
  return (
    <div
      className={`font-sans w-full relative flex flex-col items-center mb-64 sm:mb-32 bg-cover bg-no-repeat`}
    >
      <div className="flex flex-col items-center w-full">
        <h1 className="font-sans font-extrabold text-4xl text-shadow-lg text-center text-white mt-[30px]">
          Fastest and best medical care
        </h1>
        <p className="font-medium text-[18px] font-sans  text-center text-white mt-[30px] sm:px-[10px]">
          Time is precious, especially during emergencies. Our air ambulances
          are not just vehicles. they are a beacon of hope on the fastest route
          to medical assistance. We pride ourselves on a lightning-quick
          response that bridges the gap between distress and relief.
        </p>
        <Link href="/contact-us">
          <button className="w-[300px] h-[60px]   bg-transparent border-solid border-[1px] border-[#FFFFFF] rounded-[4px] mt-[60px] sm:mt-[30px] text-center text-[16px] font-sans leading-[26px] font-bold text-white  hover:bg-rgb(255 255 255)">
            Make an Appointment
          </button>
        </Link>
      </div>
      <FloatingBox />
    </div>
  );
};

export default FastestMedical;

const FloatingBox = () => {
  return (
    <div
      className={`bg-white translate-y-1/2 w-[900px] sm:max-w-[66.666%] xs:max-w-[85%] px-8 sm:px-4 py-5 rounded-xl shadow-2xl items-center flex justify-between gap-3 sm:gap-5 sm:flex-wrap sm:justify-center sm:items-center cursor-pointer`}
    >
      <div className="flex flex-col items-center">
        <Image
          src={MiniAeroplane}
          className="w-20 h-20 sm:w-12 sm:h-12 lg:w-14 lg:h-14"
        />
        <p className="font-bold text-5xl sm:text-xl ">
          <CountUp start={1} end={450} duration={5} />+
        </p>
        <p className="font-semibold sm:text-xs text-gray-700 font-sans">
          Air Transfer
        </p>
      </div>

      <div className="flex flex-col items-center">
        <Image
          src={Miniaircraft}
          className="w-20 h-20 sm:w-12 sm:h-12 lg:w-14 lg:h-14"
        />
        <p className="font-bold text-5xl sm:text-xl ">
          <CountUp start={1} end={25} duration={8} />+
        </p>
        <p className="font-semibold sm:text-xs text-gray-700 font-sans">
          No of Fleet
        </p>
      </div>

      <div className="flex flex-col items-center">
        <Image
          src={Doctor}
          className="w-20 h-20 sm:w-12 sm:h-12 lg:w-14 lg:h-14"
        />
        <p className="font-bold text-5xl sm:text-xl ">
          <CountUp start={1} end={15} duration={10} />+
        </p>
        <p className="font-semibold sm:text-xs text-gray-700 font-sans">
          Doctors
        </p>
      </div>
      <div className="flex flex-col items-center">
        <Image
          src={Miniglobal}
          className="w-20 h-20 sm:w-12 sm:h-12 lg:w-14 lg:h-14"
        />
        <p className="font-bold text-5xl sm:text-xl ">
          <CountUp start={1} end={7000} duration={5} /> +
        </p>
        <p className="font-semibold sm:text-xs text-gray-700 font-sans">
          Global Affiliation
        </p>
      </div>
    </div>
  );
};
