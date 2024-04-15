import React from 'react';
import styles from './FastestMedical.module.css';
import Image from 'next/image';
import CountUp from 'react-countup';
import MiniAeroplane from '../../public/images/counter/aeroplane.png';
import Miniaircraft from '../../public/images/counter/aeroplane2.png';
import Doctor from '../../public/images/counter/doctor.png';
import Miniglobal from '../../public/images/counter/global.png';
import Link from 'next/link';
const FastestMedical = () => {
  return (
    <div className='font-sans'>
      <div
        className={`${styles.lower_plane} w-full relative flex flex-col items-center mb-64 sm:mb-32 bg-cover bg-no-repeat`}
        style={{ backgroundImage: "url('/images/lower_plane.png')" }}
      >
        <div className="flex flex-col items-center w-full">
          <h1 className="font-sans font-extrabold text-4xl text-shadow-lg text-center text-white mt-[30px]">
            Fastest and best medical care
          </h1>
          <p className="font-medium text-[18px] font-sans  text-center text-white mt-[30px] sm:px-[10px]">
            Time is precious, especially during emergencies. Our air ambulances
            are not just vehicles; they are a beacon of hope on the
            <br />
            fastest route to medical assistance. We pride ourselves on a
            lightning-quick response that bridges the gap between distress and
            relief.
          </p>
          <Link href="/contact-us">
            <button className="w-[300px] h-[60px]   bg-transparent border-solid border-[1px] border-[#FFFFFF] rounded-[4px] mt-[60px] sm:mt-[30px] text-center text-[16px] font-sans leading-[26px] font-bold text-white  hover:bg-rgb(255 255 255)">
              Make an Appointment
            </button>
          </Link>
        </div>
        <div
          className={`${styles.lowerShadow} bg-white translate-y-2/3 sm:translate-y-[10%] w-8/12 sm:w-10/12 p-4 shadow-md items-center flex justify-evenly flex-row sm:flex-wrap sm:justify-center  sm:flex-col sm:items-center`}
        >
          <div className="flex flex-col items-center">
            <Image src={MiniAeroplane} height={100} width={100} />
            <div className="font-bold text-[50px]">
              <CountUp start={1} end={450} duration={5} />+
            </div>
            <div className="font-semibold text-black font-sans">
              Air Transfer
            </div>
          </div>

          <div className="flex flex-col items-center">
            <Image src={Miniaircraft} width={100} height={100} />
            <div className="font-bold text-[50px]">
              <CountUp start={1} end={25} duration={8} />+
            </div>
            <div className="font-semibold text-black font-medium font-sans">
              No of Fleet
            </div>
          </div>

          <div className="flex flex-col items-center">
            <Image src={Doctor} width={100} height={100} />
            <div className="font-bold text-[50px]">
              <CountUp start={1} end={15} duration={10} />+
            </div>
            <div className="font-semibold text-black font-sans">Doctors</div>
          </div>
          <div className="flex flex-col items-center">
            <Image src={Miniglobal} width={100} height={100} />
            <div className="font-bold text-[50px]">
              <CountUp start={1} end={7000} duration={5} /> +
            </div>
            <div className="font-semibold text-black font-sans">
              Global Affiliation
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FastestMedical;
