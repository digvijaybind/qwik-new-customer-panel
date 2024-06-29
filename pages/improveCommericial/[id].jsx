import React from 'react';
import styles from './improveCommericial.module.css';
import { TbArrowsExchange2 } from 'react-icons/tb';
import Airline from '../../public/images/commerialImages/Airline.svg';
import Image from 'next/image';
import Strectres from '../../public/images/bookingIcon/strectres.png';
import Oxygen from '../../public/images/bookingIcon/oxygen.svg';
import Medicalequiment from '../../public/images/bookingIcon/medicalEquiment.png';
import Doctors from '../../public/images/bookingIcon/doctor.png';
const TravelDuration = () => {
  return (
    <div className="">
      <div className="flex flex-col bg-[#F8F9FA] px-[15px] py-[15px]">
        <div className="flex flex-row justify-between sm:flex-col">
          <div className="flex justify-between items-center">
            <div className="font-black text-[20px] mr-4">Mumbai</div>
            <TbArrowsExchange2
              style={{ color: 'black', height: '25px', width: '25px' }}
            />
            <div className="font-black text-[20px] ml-4">Dubai</div>
          </div>
          <div className="bg-[#0C7A31] px-2 py-2 text-[14px] font-extralight text-white text-center">
            Your Booking on priority
          </div>
        </div>
        <div className="font-medium text-black flex justify-between mt-4">
          <div className="flex justify-between flex-row items-center">
            <div className="bg-[#54CDEF] h-[32px] w-[134px] px-2 text-[12px] text-[#fff] flex justify-center items-center">
              Saturday , April 27
            </div>
            <div className="ml-5 font-sans text-[14px]">Non Stop 2h 10m</div>
          </div>
          <div className="font-medium text-[12px] text-[#171A1F]">
            Check Terms
          </div>
        </div>
        <div className="font-medium text-black flex justify-between mt-4">
          <div className="flex justify-between flex-row items-center">
            <div className="">
              <Image src={Airline} width={44} height={42} />
            </div>
            <div className="ml-2 font-sans text-[11px] text-[#9095A0]">
              <span className="font-black text-[14px] text-[#171A1F]">
                Vistara
              </span>{' '}
              UK 583 , UK 846{' '}
            </div>
          </div>
          <div className="font-medium text-[12px] text-[#171A1F]">
            Charter Plane
          </div>
        </div>
      </div>
      <div className="bg-[#F2F2F2] mx-4 flex flex-row py-4 px-6">
        <div className="Timeline flex flex-col justify-between">
          <div className="FromTime"> 06:10</div>
          <div className="ToTime"> 09:10</div>
        </div>
        <div className="Line mx-4 self-center h-[100px] relative">
          <div className="LineDot absolute top-0 left-1/2 transform -translate-x-1/2 rounded-full w-6 h-6">
            {/* Inner circle with border */}
            <div className="absolute inset-0 bg-transparent border-2 border-[#9095A0] rounded-full"></div>
          </div>
          <div className="h-full w-1 mx-auto">
            {/* Dotted line */}
            <div className="h-full border-l border-gray-900 border-dotted"></div>
          </div>
          <div className="LineDot absolute top-0 left-1/2 transform -translate-x-1/2 rounded-full w-6 h-6">
            {/* Inner circle with border */}
            <div className="absolute inset-0 bg-transparent border-2 border-[#9095A0] rounded-full"></div>
          </div>
        </div>
        <div className="Location flex flex-col justify-between">
          <div className="FromLocation flex justify-around flex-row">
            <span className="FromLocationName">Mumbai</span>
            <div className="AirportName">
              Chhratrapati Shivaji International Airport,Terminal 2
            </div>
          </div>
          <div className="Timeduration">3h 5m</div>
          <div className="Tolocation flex justify-around flex-row">
            <span>Abu dhabhi</span>
            <div>Abudhabhi, Abu Dhabhi Int, terminal A</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 grid-rows-3 gap-4 px-[20px] sm:grid-cols-1 sm:grid-rows-5 sm:gap-6">
        <div className="flex flex-row">
          <div className="bg-[#daf7ff] w-[45px] h-[40px]  shadow-2xl text-center flex justify-center items-center ">
            <Image
              src={Strectres}
              width={25}
              height={15}
              className="rounded-full "
            />
          </div>
          <div className=" flex flex-col text-[10px] font-black text-gray-400 ml-3">
            Stretcher :
            <span className="text-[12px] text-[#000000] font-bold ">
              {' '}
              1 stretcher per patient
            </span>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="bg-[#daf7ff] w-[45px] h-[40px]  shadow-2xl text-center flex justify-center items-center ">
            <Image
              src={Doctors}
              width={25}
              height={15}
              className="rounded-full "
            />
          </div>
          <div className=" flex flex-col text-[10px] font-black  text-gray-400 ml-3">
            Doctor onboard :
            <span className="text-[12px] text-[#323232] font-bold ">
              {' '}
              2 Doctors, 1 Head nurse, 1 Attendant
            </span>
          </div>
        </div>

        <div className="flex flex-row">
          <div className="bg-[#daf7ff] w-[45px] h-[40px]  shadow-2xl text-center flex justify-center items-center ">
            <Image
              src={Oxygen}
              width={25}
              height={15}
              className="rounded-full "
            />
          </div>
          <div className=" flex flex-col text-[10px] font-black text-gray-400 ml-2">
            Oxygen :
            <span className="text-[12px] text-[#323232] font-bold  ">
              {' '}
              Oxygen(4L/Min)
            </span>
          </div>
        </div>

        <div className="flex flex-row">
          <div className="bg-[#daf7ff] w-[45px] h-[40px]  shadow-2xl text-center flex justify-center items-center ">
            <Image
              src={Medicalequiment}
              width={25}
              height={15}
              className="rounded-full "
            />
          </div>
          <div className=" flex flex-col text-[10px] font-black text-gray-400 ml-2">
            Medical equipment :
            <span className="text-[12px] text-[#323232] font-bold ">
              {' '}
              Multiple medical aid equipment
            </span>
          </div>
        </div>
        <div className="flex flex-row col-span-2 sm:col-span-1">
          <div className="bg-[#daf7ff] w-[45px] h-[40px]  shadow-2xl text-center flex justify-center items-center ">
            <Image
              src={Strectres}
              width={25}
              height={15}
              className="rounded-full "
            />
          </div>
          <div className=" flex flex-col text-[10px] font-black text-gray-400 ml-2">
            Medical equipment :
            <span className="text-[12px] text-[#323232] font-bold ">
              {' '}
              Multiple medical aid equipment
            </span>
          </div>
        </div>
      </div>
      <div className="imagesCollapse"></div>
    </div>
  );
};
const TotalFare = () => {
  return (
    <div className="bg-[#F8F9FA] px-5 py-10 shadow-sm">
      <div className="flex flex-col justify-between">
        <div className="text-[#171A1F] text-[20px] font-sans font-black mb-4">
          FARE SUMMARY
        </div>
        <div className="BaseFare flex justify-between mb-4">
          <div className="font-Inter text-[18px]">Base Fare</div>
          <div className="font-Inter font-bold text-[16px]">$20,350</div>
        </div>
        <hr className="h-[0.5px] border-none bg-[#BCC1CA] w-full " />
        <div className="Taxes&surface flex justify-between mt-6 mb-6">
          <div className="font-Inter text-[18px]">Taxes </div>
          <div className="font-Inter font-bold text-[16px]">$8,350</div>
        </div>
        <hr className="h-[0.5px] border-none bg-[#BCC1CA] w-full mt-4 mb-4" />
        <div className="Totalamount flex justify-between items-center mt-8 mb-4">
          <div className="font-sans font-black text-[18px]">Total Amount</div>
          <div className="bg-[#54CDEF] text-[#fff] text-[20px] flex justify-center items-center w-[134px] h-[52px] font-Inter font-medium">
            $28,350{' '}
          </div>
        </div>
      </div>
    </div>
  );
};

const PayConfirmation = () => {
  return (
    <div className="bg-[#F8F9FA] shadow-sm">
      <div className="font-bold">Payment PayConfirmation</div>
    </div>
  );
};
const UpperSection = () => {
  return (
    <div className="grid grid-cols-9 gap-5 px-10 sm:grid-cols-1 sm:px-3 sm:gap-2">
      <div className="col-span-6 px-[20px] py-[15px]  w-full   sm:border-0 sm:border-none sm:bg-transparent sm:col-span-1 bg-[#F8F9FA]">
        <TravelDuration />
      </div>
      <div className="col-span-3 px-[15px] py-[10px]   flex flex-col justify-between sm:col-span-1 ">
        <TotalFare />
        <PayConfirmation />
      </div>
    </div>
  );
};
const ImproveCommericial = () => {
  return (
    <div className={`${styles.Container}`}>
      <div className="px-[15px] font-sans z-0">
        <div className={`${styles.Section1_Container} w-full`}></div>
        <div className="relative bottom-[200px]">
          <UpperSection />

          {/* <div className="grid grid-col-9   mt-3  rounded-md bg-[#fff]">
            <div className="col-span-5  mb-5  shadow-2xl  px-10 py-10 sm:col-span-1 sm:mb-2 sm:px-3 sm:py-3 z-0">
          
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ImproveCommericial;
