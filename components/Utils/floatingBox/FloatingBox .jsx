import React from 'react';
import Image from 'next/image';
import CountUp from 'react-countup';
import MiniAeroplane from '../../../public/images/counter/aeroplane.png';
import Miniaircraft from '../../../public/images/counter/aeroplane2.png';
import Doctor from '../../../public/images/counter/doctor.png';
import Miniglobal from '../../../public/images/counter/global.png';

const FloatingBox = ({ className }) => {
  return (
    <div
      className={`bg-white  w-[1100px] sm:max-w-[66.666%] xs:max-w-[85%] px-20 py-3 sm:px-1 sm:py-4 sm: md:px-5  rounded shadow-2xl   grid grid-cols-4 gap-3 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-2 cursor-pointer ${className} `}
    >
      <div className="flex flex-col items-center">
        <Image
          src={MiniAeroplane}
          className="w-25 h-25 sm:w-12 sm:h-12 lg:w-14 lg:h-14 mb-5 "
        />
        <p className="font-bold text-5xl sm:text-xl mb-4">
          <CountUp start={1} end={450} duration={5} />+
        </p>
        <p className="font-semibold sm:text-sm text-gray-700 font-sans">
          Air Transfer
        </p>
      </div>
      <div className="flex flex-col items-center">
        <Image
          src={Miniaircraft}
          className="w-25 h-25 sm:w-12 sm:h-12 lg:w-14 lg:h-14 mb-5"
        />
        <p className="font-bold text-5xl sm:text-xl sm:font-bold mb-4">
          <CountUp start={1} end={25} duration={8} />+
        </p>
        <p className="font-semibold sm:text-sm text-gray-700 font-sans">
          No of Fleet
        </p>
      </div>
      <div className="flex flex-col items-center">
        <Image
          src={Doctor}
          className="w-25 h-25 sm:w-12 sm:h-12 lg:w-14 lg:h-14 mb-5"
        />
        <p className="font-bold text-5xl sm:text-xl mb-4">
          <CountUp start={1} end={15} duration={10} />
        </p>
        <p className="font-semibold sm:text-sm text-gray-700 font-sans">
          Doctors
        </p>
      </div>
      <div className="flex flex-col items-center">
        <Image
          src={Miniglobal}
          className="w-25 h-25 sm:w-12 sm:h-12 lg:w-14 lg:h-14 mb-5"
        />
        <p className="font-bold text-5xl sm:text-xl mb-4">
          <CountUp start={1} end={7000} duration={5} /> +
        </p>
        <p className="font-semibold sm:text-sm text-gray-700 font-sans">
          Global Affiliation
        </p>
      </div>
    </div>
  );
};

export default FloatingBox;
