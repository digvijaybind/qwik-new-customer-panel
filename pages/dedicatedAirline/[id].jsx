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

const Guarantee = () => {
  return (
    <div className="flex justify-center flex-col  items-center px-[25px] py-[30px] border-2 border-[#D9D9D9] rounded-md  shadow-md sm:px-[10px] sm:py-[10px] sm:w-[320px] md:w-[768px] lg:w-[881px] xl:min-w-[881px]">
      <div className="font-black text-[16px] font-sans">OUR GUARANTEE</div>
      <div className="font-sans text-[12px] font-medium mt-3">
        We Guarantee that when choosing Qwiklif, your loved ones shall be
        treated with professional and compassionate care. We consider every
        patient as family, we strive to perfection and continuously monitoring
        our operations. When choosing A provider, Remember that Qwiklif Air
        ambulance is World First air ambulance service provider giving instant
        quotation.
      </div>
      <div>
        <Image src={Signature} width={200} height={125} />
      </div>
      <div className="font-extrabold text-[12px] font-sans">CEO , QWIKLIF</div>
    </div>
  );
};

const MedicalInstruments = ({ src, width, height, Title, descripation }) => {
  return (
    <div className="flex justify-around flex-row items-center">
      <Image src={src} width={width} height={height} />
      <div className="font-black text-[12px] font-sans ml-3">{Title}</div>
      <div className="text-[12px] font-sans font-medium ml-2">
        {descripation}
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
    <div className="px-[15px] py-[25px] border-2 border-[#D9D9D9] rounded-md w-[881px]  shadow-md mb-5 sm:min-w-[320px]">
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
            className={`w-[165px] h-[20px] text-[#fff] text-[12px] font-extrabold font-sans text-center  ${styles.backgroundContainer} sm:mt-3`}
          >
            Your Booking On Priority
          </div>
        </div>
        <div className={`flex justify-between mt-2 sm:flex-col sm:mt-3`}>
          <div className="flex justify-between items-center w-[240px] sm:flex-col sm:items-baseline">
            <div className="bg-[#FEE9C5] h-[26px] font-sans text-[12px] font-extrabold flex justify-between items-center px-[5px] rounded-sm">
              {' '}
              Saturday, Apr 27
            </div>
            <span className="font-medium text-[12px]">Non Stop - 2h 10m</span>
          </div>
          <div className="font-medium text-[12px] text-[#68D2F3]">
            Check Terms
          </div>
        </div>
        <div className="flex justify-between items-center sm:flex sm:flex-col sm:items-baseline">
          <div className="flex flex-row items-center sm:justify-between">
            <Image src={Airline} width={50} height={20} />
            <div className="font-black text-[12px] mr-[10px]">Vistara</div>
            <div className="font-medium text-[10px]">UK 583, UK 848</div>
          </div>
          <div className="font-black text-[#323232] text-[12px]">
            Charter Plane
          </div>
        </div>
      </div>
      <div className="BottomSection flex flex-col bg-[#CFCFCF]  px-[10px] py-[10px] rounded-md">
        <div className=""></div>
        <div class="border-b border-[CFCFCF] w-full"></div>
        {/* <div className="grid grid-cols-3 grid-rows-3 gap-x-4 gap-y-8">
          <div className="flex justify-center">
            <MedicalInstruments
              src={Strectres}
              width={26}
              height={26}
              Title="Stretcher:"
              descripation="1 Stretcher for patient "
            />
          </div>
          <div className="">
            <MedicalInstruments
              src={Strectres}
              width={26}
              height={26}
              Title="Stretcher:"
              descripation="1 Stretcher for patient "
            />
          </div>
          <div className="">
            <MedicalInstruments
              src={Strectres}
              width={26}
              height={26}
              Title="Stretcher:"
              descripation="1 Stretcher for patient "
            />
          </div>
          <div className="">
            <MedicalInstruments
              src={Strectres}
              width={26}
              height={26}
              Title="Stretcher:"
              descripation="1 Stretcher for patient "
            />
          </div>
          <div className="">
            <MedicalInstruments
              src={Strectres}
              width={26}
              height={26}
              Title="Stretcher:"
              descripation="1 Stretcher for patient "
            />
          </div>
        </div> */}

        {/* grid system */}
        {/* <div className="grid grid-cols-3 grid-rows-3 gap-x-2 gap-y-2 mt-5  sm:grid sm:grid-cols-1 sm:gap-x-1 sm:gap-y-1">
          <div className="flex justify-center sm:flex-col">
            <MedicalInstruments
              src={Strectres}
              width={26}
              height={26}
              Title="Stretcher:"
              descripation="1 Stretcher for patient "
            />
          </div>
          <div className="flex justify-center sm:flex-col">
            <MedicalInstruments
              src={Doctors}
              width={26}
              height={26}
              Title="Doctor Onboard :"
              descripation="2 Doctor, 1 Head Nurse & 1 Attendent"
            />
          </div>
          <div className="flex justify-center sm:flex-col">
            <MedicalInstruments
              src={Oxygen}
              width={26}
              height={26}
              Title="Oxygent(4L/Min)"
              descripation=""
            />
          </div>
          <div className="flex justify-start col-span-3 ml-5 sm:ml-0">
            <MedicalInstruments
              src={Medicalequiment}
              width={26}
              height={26}
              Title="Medical Equipment"
              descripation=""
            />
          </div>
          <div className="flex justify-start col-span-3 ml-5 sm:ml-0">
            <MedicalInstruments
              src={Strectres}
              width={26}
              height={26}
              Title="Patient condition is critical? Don’t stress we additional provide medical equipment based on patient condition"
              descripation=""
            />
          </div>
        </div> */}
        <div className="grid grid-cols-3 grid-rows-3  gap-2 mt-5 sm:grid-cols-1 sm:gap-2 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex justify-center sm:justify-start">
            <MedicalInstruments
              src={Strectres}
              width={26}
              height={26}
              Title="Stretcher:"
              descripation="1 Stretcher for patient"
            />
          </div>
          <div className="flex justify-center sm:justify-start">
            <MedicalInstruments
              src={Doctors}
              width={26}
              height={26}
              Title="Doctor Onboard:"
              descripation="2 Doctor, 1 Head Nurse & 1 Attendant"
            />
          </div>
          <div className="flex justify-center sm:justify-start">
            <MedicalInstruments
              src={Oxygen}
              width={26}
              height={26}
              Title="Oxygen (4L/Min)"
              descripation=""
            />
          </div>
          <div className="flex justify-center sm:justify-start">
            <MedicalInstruments
              src={Medicalequiment}
              width={26}
              height={26}
              Title="Medical Equipment"
              descripation=""
            />
          </div>
          <div className="flex justify-center sm:justify-start sm:hidden"></div>
          <div className="flex justify-center sm:justify-start sm:hidden"></div>
          <div className="flex justify-center sm:justify-start">
            <MedicalInstruments
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
      <div className="col-span-8">
        <div className="font-extrabold text-[16px] font-sans">{title}</div>
        <li className="text-[12px] font-medium font-sans mt-3 sm:min-w-[320px]">
          {descripation}
        </li>
      </div>
    </div>
  );
};
const ImportantInfo = () => {
  return (
    <div className="border-2 border-[#D9D9D9] px-[30px] py-[30px] rounded-md w-[881px] shadow-md mt-5 sm:px-[10px] sm:py-[10px]">
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
    <div className="flex flex-col justify-start px-[25px] h-[145px] py-[18px] shadow-2xl bg-[#fff] w-full  rounded-md">
      <div className=" text-[16px] font-black">Fare Summary</div>
      <div className="flex justify-between mb-2">
        <div className="font-bold text-[12px] font-sans">Base Fare</div>
        <div className="font-medium text-[12px] font-sans">$ 20,765</div>
      </div>
      <div class="border-b border-gray-300"></div>
      <div className="flex justify-between mb-2">
        <div className="font-bold text-[12px] font-sans">
          Taxes & Surcharges
        </div>
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
    <div className="flex flex-col justify-center px-[25px]  py-[18px] h-[400px] shadow-2xl bg-[#fff] w-full  rounded-md mt-5">
      <div className="text-[16px] font-black text-center">
        Pay 20% Reserve Your Seat
      </div>
      <input
        className="border-2 border-[#CBCBCB] rounded-md mt-5 px-[30px] py-[5px] text-center shadow-2xl"
        placeholder="Enter Your Name"
      />
      <input
        className="border-2 border-[#CBCBCB] rounded-md mt-5 px-[30px] py-[5px] text-center shadow-2xl"
        placeholder="Enter Your Phone Number"
      />
      <input
        className="border-2 border-[#CBCBCB] rounded-md mt-5 px-[30px] py-[5px] text-center shadow-2xl"
        placeholder="Enter Your Email ID"
      />
      <button className="bg-[#12B5E4] rounded-md mt-3 py-[7px] cursor-pointer text-[12px] text-[#fff] font-bold font-sans hover:text-[#323232]">
        Pay now
      </button>
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
    <div className={`${styles.Container}`}>
      <div className={`${styles.Section1_Container} w-full`}></div>
      <div className="grid grid-cols-8 grid-rows-1 gap-15 px-[80px] py-[10px] relative bottom-40 sm:px-[5px] sm:py-[5px]">
        <div className="col-span-6 border-2  border-gray-200 bg-[#FFF] shadow-2xl  h-auto w-[940px] rounded-xl px-[25px] py-[25px] sm:px-[0px] sm:py-[0px]">
          <TravelDuration />
          <Guarantee />
          <OurStories isMobile={isMobile} />
          <ImportantInfo />
        </div>
        <div className="col-span-2 border-2 border-gray-200  shadow-2xl h-[100px] rounded-xl flex justify-between flex-col items-center sm:hidden md:hidden lg:hidden">
          <TotalFare />
          <PayConfirmation />
        </div>
      </div>
    </div>
  );
};

export default DedicatedAirline;
