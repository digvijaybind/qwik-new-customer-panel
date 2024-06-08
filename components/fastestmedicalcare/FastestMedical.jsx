import React from 'react';
import Image from 'next/image';
import CountUp from 'react-countup';
import MiniAeroplane from '../../public/images/counter/aeroplane.png';
import Miniaircraft from '../../public/images/counter/aeroplane2.png';
import Doctor from '../../public/images/counter/doctor.png';
import Miniglobal from '../../public/images/counter/global.png';
import Link from 'next/link';
import { useRouter } from 'next/router';

const FastestMedical = React.memo(() => {
  const router = useRouter();
  return (
    <div
      className={`font-sans w-full  flex flex-col items-center mb-10 sm:mb-32 bg-cover bg-no-repeat h-full`}
      style={{
        backgroundImage: "url('/images/lower_plane.jpeg')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="flex flex-col items-center w-full">
        <h1 className="font-sans font-extrabold text-4xl text-shadow-lg text-center text-white mt-[30px] md:text-xl sm:text-lg">
          Fastest and best medical care
        </h1>
        <p className="font-medium text-[18px] font-sans  text-center text-white mt-[30px] sm:px-[10px] md:text-xl sm:text-lg">
          Time is precious, especially during emergencies. Our air ambulances
          are not just vehicles. they are a beacon of hope on the fastest route
          to medical assistance. We pride ourselves on a lightning-quick
          response that bridges the gap between distress and relief.
        </p>
        <Link href="/contact" className="sm:hidden md:hidden">
          <button
            className="w-[300px] h-[60px]   bg-transparent border-solid border-[1px] border-[#FFFFFF] rounded-[4px] mt-[60px] sm:mt-[30px] text-center text-[16px] font-sans leading-[26px] font-bold text-white  hover:bg-rgb(255 255 255)"
            onClick={() => router.push('/contact')}
          >
            Make an Appointment
          </button>
        </Link>
      </div>
      <FloatingBox className="relative bottom-12 sm:bottom-10 md:bottom-24 sm:h-1/2" />
    </div>
  );
});

export default FastestMedical;

const FloatingBox = ({ className }) => {
  return (
    <div
      className={`bg-white translate-y-1/2 w-[1100px] sm:max-w-[66.666%] xs:max-w-[85%] px-20 py-3 sm:px-1 sm:py-4 sm: md:px-5  rounded shadow-2xl   grid grid-cols-4 gap-3 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-2 cursor-pointer ${className} shadow-2xl shadow-cyan-300/50`}
    >
      <div className="flex flex-col items-center">
        <Image
          src={MiniAeroplane}
          className="w-25 h-25 sm:w-12 sm:h-12 lg:w-14 lg:h-14 mb-5 "
        />
        <p className="font-black text-5xl sm:text-xl mb-4">
          <CountUp start={1} end={450} duration={5} />+
        </p>
        <p className="font-semibold sm:text-xs text-gray-700 font-sans">
          Air Transfer
        </p>
      </div>
      <div className="flex flex-col items-center">
        <Image
          src={Miniaircraft}
          className="w-25 h-25 sm:w-12 sm:h-12 lg:w-14 lg:h-14 mb-5"
        />
        <p className="font-black text-5xl sm:text-xl mb-4">
          <CountUp start={1} end={25} duration={8} />+
        </p>
        <p className="font-semibold sm:text-xs text-gray-700 font-sans">
          No of Fleet
        </p>
      </div>
      <div className="flex flex-col items-center">
        <Image
          src={Doctor}
          className="w-25 h-25 sm:w-12 sm:h-12 lg:w-14 lg:h-14 mb-5"
        />
        <p className="font-black text-5xl sm:text-xl mb-4">
          <CountUp start={1} end={15} duration={10} />+
        </p>
        <p className="font-semibold sm:text-xs text-gray-700 font-sans">
          Doctors
        </p>
      </div>
      <div className="flex flex-col items-center">
        <Image
          src={Miniglobal}
          className="w-25 h-25 sm:w-12 sm:h-12 lg:w-14 lg:h-14 mb-5"
        />
        <p className="font-black text-5xl sm:text-xl mb-4">
          <CountUp start={1} end={7000} duration={5} /> +
        </p>
        <p className="font-semibold sm:text-xs text-gray-700 font-sans">
          Global Affiliation
        </p>
      </div>
    </div>
  );
};
