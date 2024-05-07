'use client';
import React, { useEffect } from 'react';
import styles from './dedicatedAirline.module.css';
import Image from 'next/image';
import Signature from '../../public/images/Signature.svg';
import { FaArrowRightLong } from 'react-icons/fa6';
import Airline from '../../public/images/airlines/indigo.jpg';
import Doctors from '../../public/images/bookingIcon/doctor.png';
import Medicalequiment from '../../public/images/bookingIcon/medicalEquiment.png';
import Oxygen from '../../public/images/bookingIcon/oxygen.svg';
import Strectres from '../../public/images/bookingIcon/strectres.png';
import Point from '../../public/images/PointIcon.svg';
import { useState } from 'react';
import Important from '../../db/important.json';
import MedicalInstruments from '@/components/medicalInstrument/MedicalInstrument';
import Learjet from '../../public/images/airline-mini-logo/learjet-405.svg';
import MedicalInstrumentPayMethod from '@/components/medicalInstrument/MedicalInstrumentPayMethod';

const Guarantee = () => {
  return (
    <div
      className="responsiveBoxSizing border border-gray-300 rounded-md flex flex-col items-center py-5 sm:items-start
          sm:w-1/2 md:w-3/4 lg:w-11/12 xl:w-11/12 "
    >
      <div class="font-black text-lg font-sans">OUR GUARANTEE</div>
      <div class="font-sans text-sm font-medium mt-3 px-4 sm:w-80 sm:px-4">
        We guarantee that when choosing Qwiklif, your loved ones shall be
        treated with professional and compassionate care. We consider every
        patient as family, we strive for perfection, and continuously monitor
        our operations. When choosing a provider, remember that Qwiklif Air
        Ambulance is the world's first air ambulance service provider giving an
        instant quotation.
      </div>
      <div class="flex items-center flex-col justify-center mt-5">
        <Image src={Signature} width={200} height={125} />
        <div class="font-extrabold text-sm font-sans">CEO, QWIKLIF</div>
      </div>
    </div>
  );
};

const GuarranteeUpdate = () => {
  return (
    <div className="px-[25px] py-[30px] border-2 border-[#D9D9D9] rounded-md flex items-center flex-col  sm:items-start md:items-start sm:py-[20px] sm:px-[15px] md:px-[35px] lg:px-[15px] xl:">
      <div className="font-black text-[16px] font-sans">OUR GUARANTEE</div>
      <div className="font-sans text-[12px] font-medium mt-3 px-[20px] sm:w-[320px] sm:px-[20px]  md:w-[768px] lg:w-[881px] xl:w-[881px]">
        We Guarantee that when choosing Qwiklif, your loved ones shall be
        treated with professional and compassionate care. We consider every
        patient as family, we strive to perfection and continuously monitoring
        our operations. When choosing A provider, Remember that Qwiklif Air
        ambulance is World First air ambulance service provider giving instant
        quotation.
      </div>
      <div className="flex items-center flex-col justify-center">
        <Image src={Signature} width={200} height={125} />
        <div className="font-extrabold text-[12px] font-sans">
          CEO , QWIKLIF
        </div>
      </div>
    </div>
  );
};

const AutoVideoSlider = ({ videos, interval, isMobile }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % videos.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [videos.length, interval]);

  return (
    <div className={`mt-5 {styles.sliderContainer}`}>
      <div className={styles.sliderRow}>
        {videos.map((video, index) => (
          <div
            key={index}
            className={`slide cursor-pointer ${
              index >= currentSlide && index < currentSlide + (isMobile ? 1 : 3)
                ? 'active'
                : ''
            }`}
            style={{ marginRight: '10px' }}
          >
            <video controls>
              <source src={video.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};

const TravelDuration = () => {
  return (
    <div className="px-[15px] py-[25px] border-2 border-[#D9D9D9] rounded-md w-[881px]  shadow-md mb-5 sm:min-w-[320px] sm:bg-[#fff]">
      <div className="Topsection flex flex-col sm:px-[10px] sm:py-[10px]">
        <div className="flex justify-between sm:flex-col">
          <div className="flex items-center  justify-around w-[200px]">
            <span className="font-black text-[16px] font-sans">Mumbai</span>
            <span className="">
              <FaArrowRightLong />
            </span>
            <span className="font-black text-[16px] font-sans"> Dubai</span>
          </div>
          <div
            className={`w-[165px] h-[20px] text-[#fff] text-[12px] font-extrabold font-sans text-center rounded-md  ${styles.backgroundContainer} sm:mt-4`}
          >
            Your Booking On Priority
          </div>
        </div>
        <div className={`flex justify-between mt-2 sm:flex-col sm:mt-3`}>
          <div className="flex justify-between items-center w-[240px] sm:flex-col sm:items-baseline">
            <div className="bg-[#FEE9C5] h-[26px] font-sans text-[12px]   font-extrabold flex justify-between items-center px-[10px] sm:mb-2 rounded-md">
              {' '}
              Saturday, Apr 27
            </div>
            <span className="font-medium text-[12px]">Non Stop - 2h 10m</span>
          </div>
          <div className="font-bold text-[12px] text-[#68D2F3] sm:mt-3">
            Check Terms
          </div>
        </div>
        <div className="flex justify-between items-center sm:flex sm:flex-col sm:items-baseline mt-5 mb-5">
          <div className="flex flex-row items-center sm:justify-between">
            <Image src={Learjet} width={30} height={25} />
            <div className="font-black text-[12px] ml-[10px]">
              Challenger 605
            </div>
            <div className="font-medium text-[10px] ml-[10px]">
              Challenger 605
            </div>
          </div>
          <div className="font-black text-[#323232] text-[12px] sm:mt-3">
            Charter Plane
          </div>
        </div>
      </div>
      <div className="BottomSection flex flex-col bg-[#CFCFCF]  px-[10px] py-[10px] rounded-md">
        <div className=""></div>
        <div class="border-b border-[CFCFCF] w-full"></div>
        <div className="grid grid-cols-3 grid-rows-3  gap-2 mt-5 sm:grid-cols-1 sm:gap-2 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex justify-center sm:justify-start">
            <MedicalInstrumentPayMethod
              src={Strectres}
              width={26}
              height={26}
              Title="Stretcher:"
              descripation="1 Stretcher for patient"
            />
          </div>
          <div className="flex justify-center sm:justify-start">
            <MedicalInstrumentPayMethod
              src={Doctors}
              width={26}
              height={26}
              Title="Doctor Onboard:"
              descripation="2 Doctor, 1 Head Nurse & 1 Attendant"
            />
          </div>
          <div className="flex justify-center sm:justify-start">
            <MedicalInstrumentPayMethod
              src={Oxygen}
              width={26}
              height={26}
              Title="Oxygen (4L/Min)"
              descripation=""
            />
          </div>
          <div className="flex justify-start col-span-3 sm:justify-start pl-[20px] md:col-span-1 sm:col-span-1 sm:pl-[0px]">
            <MedicalInstrumentPayMethod
              src={Medicalequiment}
              width={26}
              height={26}
              Title="Medical Equipment"
              descripation=""
            />
          </div>
          <div className="flex justify-start col-span-3 sm:justify-start pl-[20px] md:col-span-1 sm:col-span-1 sm:pl-[0px]">
            <MedicalInstrumentPayMethod
              src={Strectres}
              width={26}
              height={26}
              Title="Patient condition is critical? Don’t stress we additional provide medical equipment based on patient condition"
              descripation=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const OurStories = ({ isMobile }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };
  const videos = [
    { url: 'https://www.youtube.com/watch?v=2vCCs5pojYw' },
    { url: 'https://www.youtube.com/watch?v=Pup8Mjf86RA' },
    { url: 'https://www.youtube.com/watch?v=qamsuZ25K0Q' },
    { url: 'https://www.youtube.com/watch?v=2vCCs5pojYw' },
  ];
  return (
    <div className="border-2 border-[#D9D9D9] rounded-md w-[881px] shadow-md px-[30px] py-[30px] mt-5">
      <div className="">
        <div className="h-5 font-sans font-extrabold text-black text-[16px]">
          Our Success Stories
        </div>
        <div className="h-8  flex flex-row items-center">
          <Image src={Point} width={20} height={20} />{' '}
          <span className="ml-5 font-extrabold text-[12px] font-sans">
            Video
          </span>
        </div>
        <div className=" ">
          <AutoVideoSlider
            videos={videos}
            interval={1000}
            isMobile={isMobile}
          />
          {/* <div className="w-[264px] h-[158px] bg-red-600"></div> */}
        </div>
      </div>
    </div>
  );
};

const InfomationHead = ({ title, descripation }) => {
  return (
    <div className="grid grid-cols-12 gap-1 mt-5 sm:grid sm:grid-cols-2 sm:w-[320px]">
      <div className="col-span-2 flex items-start justify-center sm:contents">
        <Image src={Point} width={26} height={26} />
      </div>
      <div className="col-span-8 sm:w-full">
        <div className="font-extrabold text-[16px] font-sans sm:px-[5px]">
          {title}
        </div>
        <li className="text-[12px] font-medium font-sans mt-3 sm:min-w-[320px] sm:px-[5px]">
          {descripation}
        </li>
      </div>
    </div>
  );
};
const ImportantInfo = () => {
  return (
    <div className="border-2 border-[#D9D9D9] px-[30px] py-[30px] rounded-md w-[881px] shadow-md mt-5 sm:px-[10px] sm:py-[10px] sm:w-full">
      <div className="grid grid-rows-auto grid-cols-1">
        <div className="text-[18px] font-extrabold font-sans text-black">
          Important Infomation
        </div>
        <div className="">
          {Important.map((data, index) => {
            return (
              <div key={index} className="gap-4">
                <InfomationHead
                  title={data.title}
                  descripation={data.descripation}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const TotalFare = () => {
  return (
    <div className="flex flex-col justify-start px-[25px] h-[145px] py-[18px] shadow-2xl bg-[#fff] w-full  rounded-md font-sans border-2 border-[#D9D9D9]">
      <div className=" text-[16px] font-black">Fare Summary</div>
      <div className="flex justify-between mb-2">
        <div className="font-bold text-[12px] font-sans">Base Fare</div>
        <div className="font-medium text-[12px] font-sans">$ 20,765</div>
      </div>
      <div class="border-b border-gray-300"></div>
      <div className="flex justify-between mb-2">
        <div className="font-bold text-[12px] font-sans">Taxes</div>
        <div className="font-medium text-[12px] ">$ 2000</div>
      </div>
      <div class="border-b border-gray-300"></div>
      <div className="flex justify-between mb-2 mt-2 items-center">
        <div className="font-black text-[17px] ">Total Amount</div>
        <div className="font-bold text-[12px]">$ 22,765</div>
      </div>
    </div>
  );
};

const PayConfirmation = () => {
  return (
    <div className="flex flex-col justify-center px-[25px]  py-[18px] h-[400px] shadow-2xl bg-[#fff] w-full  rounded-md mt-5 font-sans border-2 border-[#D9D9D9]">
      <div className="text-[16px] font-black text-center">
        Pay 20% Reserve Your Seat
      </div>
      <input
        className="border-2 border-[#CBCBCB] rounded-md mt-5 px-[30px] py-[5px] text-center shadow-2xl text-[10px]"
        placeholder="Enter Your Name"
      />
      <input
        className="border-2 border-[#CBCBCB] rounded-md mt-5 px-[30px] py-[5px] text-center shadow-2xl text-[10px]"
        placeholder="Enter Your Phone Number"
      />
      <input
        className="border-2 border-[#CBCBCB] rounded-md mt-5 px-[30px] py-[5px] text-center shadow-2xl text-[10px]"
        placeholder="Enter Your Email ID"
      />
      <button className="bg-[#12B5E4] rounded-md mt-3 py-[7px] cursor-pointer text-[12px] text-[#fff] font-bold font-sans hover:text-[#323232]">
        Pay now
      </button>
    </div>
  );
};
const UpperSection = () => {
  return (
    <div className="grid grid-cols-9 gap-5 px-10 sm:grid-cols-1">
      <div className="col-span-6 px-[10px] py-[15px] border-2 border-[#D9D9D9] rounded-md bg-[#fff] flex justify-center  sm:border-0 sm:border-none sm:bg-transparent">
        <TravelDuration />
      </div>
      <div className="col-span-3 px-[15px] py-[15px] border-2 border-[#D9D9D9] rounded-md bg-[#fff] flex flex-col sm:col-span-1">
        <TotalFare />
        <PayConfirmation />
      </div>
    </div>
  );
};

const DedicatedAirline = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    // <div className={`${styles.Container} font-sans`}>
    //   <div className={`${styles.Section1_Container} w-full`}></div>
    //   <div className="grid grid-cols-8 grid-rows-1 gap-15 px-[80px] py-[10px] relative bottom-40 sm:px-[5px] sm:py-[5px] md:px-[60px]">
    //     <div className="col-span-6 border-2  border-gray-200 bg-[#FFF] shadow-2xl  h-auto w-[940px] rounded-xl px-[25px] py-[25px] sm:col-span-1 sm:px-[8px] sm:py-[8px]">
    //       <TravelDuration />
    //       <Guarantee />
    //       <OurStories isMobile={isMobile} />
    //       <ImportantInfo />
    //     </div>
    //     <div className="col-span-2 border-2 border-gray-200  shadow-2xl h-[100px] rounded-xl flex justify-between flex-col items-center sm:hidden md:hidden lg:hidden xl:hidden">
    //       <TotalFare />
    //       <PayConfirmation />
    //     </div>
    //   </div>
    // </div>
    <div className="px-[15px] font-sans">
      <div className={`${styles.Section1_Container} w-full`}></div>
      <div className="relative bottom-[200px]">
        <div className="">
          <UpperSection />
        </div>
        <div className="grid grid-col-9   mt-3  rounded-md bg-[#fff]">
          <div className="col-span-5  mb-5  shadow-2xl  px-10 py-10 sm:col-span-1 sm:mb-2 sm:px-3 sm:py-3">
            <Guarantee />
            <ImportantInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DedicatedAirline;
