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
    <div>
      <div
        className={`${styles.lower_plane} h-[600px] w-full mt-[80px] relative`}
      >
        <div className="flex flex-col items-center w-full">
          <h1 className="font-arcaMajoraHeavy text-4xl text-shadow-lg text-center text-white mt-[30px]">
            Fastest and best medical care
          </h1>
          <p className="font-medium text-[21px]   text-center text-white mt-[30px] sm:px-[10px]">
            Time is precious, especially during emergencies. Our air ambulances
            are not just vehicles; they are a beacon of hope on the
            <br />
            fastest route to medical assistance. We pride ourselves on a
            lightning-quick response that bridges the gap between distress and
            relief.
          </p>
          <Link href="/contact-us">
            <button className="w-[300px] h-[60px] bg-transparent border-solid border-[1px] border-[#FFFFFF] rounded-[4px] mt-[60px] sm:mt-[30px] text-center text-[16px] leading-[26px] font-bold text-white  hover:bg-rgb(255 255 255)">
              Make an Appointment
            </button>
          </Link>
        </div>
        <div
          className={`${styles.lowerShadow} w-[90%] mx-[5%] h-[360px] sm:h-[1090px] absolute bg-white bottom-[-200px] items-center sm:bottom-[-960px] flex justify-evenly flex-row sm:flex-wrap sm:justify-center  sm:flex-col sm:items-center`}
        >
          <div class="flex flex-col items-center">
            <Image src={MiniAeroplane} height={100} width={100} />
            <div className="font-bold text-[50px]">
              <CountUp start={1} end={450} duration={5} />+
            </div>
            <div className="font-semibold text-black">Air Transfer</div>
          </div>

          <div class="flex flex-col items-center">
            <Image src={Miniaircraft} width={100} height={100} />
            <div className="font-bold text-[50px]">
              <CountUp start={1} end={25} duration={8} />+
            </div>
            <div className="font-semibold text-black font-medium">
              No of Fleet
            </div>
          </div>

          <div class="flex flex-col items-center">
            <Image src={Doctor} width={100} height={100} />
            <div className="font-bold text-[50px]">
              <CountUp start={1} end={15} duration={10} />+
            </div>
            <div className="font-semibold text-black">Doctors</div>
          </div>
          <div class="flex flex-col items-center">
            <Image src={Miniglobal} width={100} height={100} />
            <div className="font-bold text-[50px]">
              <CountUp start={1} end={7000} duration={5} /> +
            </div>
            <div className="font-semibold text-black">Global Affiliation</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FastestMedical;