'use client';

import { FaUserNurse } from 'react-icons/fa6';
import { BsSpeedometer } from 'react-icons/bs';
import { MdOutlineAirlineSeatReclineExtra } from 'react-icons/md';
import { GiWeight } from 'react-icons/gi';
import { FaLocationDot } from 'react-icons/fa6';
import { FaPersonMilitaryPointing } from 'react-icons/fa6';
import { IoIosAirplane } from 'react-icons/io';
import styles from './aviapage.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import {
  c90Slides,
  challenger605Slides,
  currencySymbols,
  learjet45Slides,
} from '@/components/Utils/Constants';
import LoadScript from '@/components/Utils/loadScript';

const DedicatedeHeader = () => {
  return (
    <div
      className="flex flex-col items-start justify-center bg-no-repeat bg-cover bg-center text-white sm:h-[20vh] h-[60dvh] sm:px-10 px-36"
      style={{ backgroundImage: "url('/images/search-detail-bg.png')" }}
    >
      <h2 className="sm:text-3xl text-[2.2rem] font-extrabold mb-0.5 drop-shadow">
        Search Result
      </h2>
      <p className="text-sm">The new generation of private jets</p>
    </div>
  );
};

// const JourneyDetails = ({
//   aircraft,
//   selectedCurrency,
//   handleCurrencyChange,
//   totalCost,
//   data,
// }) => {
//   return (
//     <>
//       <h3 className="font-bold">
//         {data?.from} to {data?.to}
//       </h3>
//       <p className="font-bold text-[0.85rem]">
//         {data?.specificAircraft?.totalTime
//           ? data?.specificAircraft?.totalTime?.toFixed(2)
//           : '-'}{' '}
//         hrs
//       </p>
//       <p className="my-3">
//         1 Passengers |{' '}
//         {aircraft?.specificAircraft?.operator?.date &&
//           moment(aircraft?.specificAircraft?.operator?.date)?.format(
//             'DD MMM, YYYY'
//           )}
//       </p>
//       <div className="border-b border-t my-2">
//         <div className="flex items-center justify-between py-3">
//           <span>Flying Cost</span>
//           <span>
//             {currencySymbols[selectedCurrency]}
//             {totalCost}
//           </span>
//         </div>
//         {/* <p className="flex justify-between py-3">
//           <span>GST (18%)</span>
//           <span>₹ 2,02,719</span>
//         </p> */}
//       </div>
//       <div className="flex justify-between items-center py-1 font-bold">
//         <span>Estimated Cost</span>
//         <div className="text-base flex items-center">
//           <select
//             id="currencySelector"
//             value={selectedCurrency}
//             onChange={handleCurrencyChange}
//             className="border-solid border-2 border-black rounded-md text-xs"
//           >
//             {Object.keys(currencySymbols)?.map((currency, index) => {
//               return (
//                 <option value={currency} key={'currency-item' + index}>
//                   {currency}
//                 </option>
//               );
//             })}
//           </select>

//           <div className="flex flex-row items-end ml-2">
//             {currencySymbols[selectedCurrency]}
//             <div className=" font-extrabold"> {totalCost}</div>
//           </div>
//         </div>
//       </div>
//       <div className="rounded-md bg-gray-300 p-2 my-4">
//         <span className="font-bold">Qwiklif</span>, helps in your emergency by
//         providing private air ambulance at affordable Price.
//       </div>
//       <div className="flex flex-col mt-5">
//         <input
//           name="username"
//           className="border-b mb-5 px-2 py-1"
//           placeholder="Your Name"
//         />
//         <input
//           name="username"
//           className="border-b mb-5 px-2 py-1"
//           placeholder="Phone"
//         />
//         <input
//           name="username"
//           className="border-b mb-5 px-2 py-1"
//           placeholder="Email"
//         />
//         <button className="bg-primary rounded-md font-medium p-2 text-sm mt-2">
//           Enquire Now
//         </button>
//       </div>
//     </>
//   );
// };

const JourneyDetails = ({
  aircraft,
  selectedCurrency,
  handleCurrencyChange,
  totalCost,
  data,
}) => {
  return (
    <>
      <h3 className="font-bold">
        {data?.from} to {data?.to}
      </h3>
      <p className="font-bold text-[0.85rem]">
        {data?.specificAircraft?.totalTime
          ? data?.specificAircraft?.totalTime?.toFixed(2)
          : '-'}{' '}
        hrs
      </p>
      <p className="my-3">
        1 Passengers |{' '}
        {aircraft?.specificAircraft?.operator?.date &&
          moment(aircraft?.specificAircraft?.operator?.date)?.format(
            'DD MMM, YYYY'
          )}
      </p>
      <div className="border-b border-t my-2">
        <div className="flex items-center justify-between py-3">
          <span>Flying Cost</span>
          <span>
            {currencySymbols[selectedCurrency]}
            {totalCost}
          </span>
        </div>
        {/* <p className="flex justify-between py-3">
          <span>GST (18%)</span>
          <span>₹ 2,02,719</span>
        </p> */}
      </div>
      <div className="flex justify-between items-center py-1 font-bold">
        <span>Estimated Cost</span>
        <div className="text-base flex items-center">
          <select
            id="currencySelector"
            value={selectedCurrency}
            onChange={handleCurrencyChange}
            className="border-solid border-2 border-black rounded-md text-xs"
          >
            {Object.keys(currencySymbols)?.map((currency, index) => {
              return (
                <option value={currency} key={'currency-item' + index}>
                  {currency}
                </option>
              );
            })}
          </select>

          <div className="flex flex-row items-end ml-2">
            {currencySymbols[selectedCurrency]}
            <div className=" font-extrabold"> {totalCost}</div>
          </div>
        </div>
      </div>
      <div className="rounded-md bg-gray-300 p-2 my-4">
        <span className="font-bold">Qwiklif</span>      </div>
      <div className="flex flex-col mt-5">
        <input
          name="username"
          className="border-b mb-5 px-2 py-1"
          placeholder="Your Name"
        />
        <input
          name="username"
          className="border-b mb-5 px-2 py-1"
          placeholder="Phone"
        />
        <input
          name="username"
          className="border-b mb-5 px-2 py-1"
          placeholder="Email"
        />
        <button className="bg-primary rounded-md font-medium p-2 text-sm mt-2">
          Enquire Now
        </button>
      </div>
    </>
  );
};

//dedicatedHeader

const FlightImages = ({ aircraftType }) => {
  const [slides, setSlides] = useState([]);
  useEffect(() => {
    switch (aircraftType) {
      case 'Challenger 605':
        setSlides(challenger605Slides);
      case 'Learjet 45':
        setSlides(learjet45Slides);
      case 'C-90':
        setSlides(c90Slides);
      default:
        setSlides(challenger605Slides);
    }
  }, [aircraftType]);
  return (
    <>
      <div className="mb-2">
        <Slider
          className="customCarousel"
          arrows={true}
          infinite={true}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
        >
          {slides?.map((slideImg, index) => {
            return (
              <img
                key={'slide-item' + index}
                src={slideImg}
                className="object-cover object-center sm:h-[20vh] h-[40dvh] w-full rounded-md overflow-hidden"
              />
            );
          })}
        </Slider>
      </div>
      <div className={`grid grid-cols-${slides?.length} gap-3`}>
        {slides?.map((slideImg, index) => {
          return (
            <img
              key={'slide-preview-item' + index}
              src={slideImg}
              className="object-cover object-top h-[80%] w-full rounded-md overflow-hidden"
            />
          );
        })}
      </div>
      <div className="bg-gray-200 rounded-md p-3 grid grid-cols-5 text-sm">
        <div className="flex items-center gap-1">
          <MdOutlineAirlineSeatReclineExtra className="text-base text-Bluedark" />
          6
        </div>
        <div className="flex items-center gap-1">
          <GiWeight className="text-base text-Bluedark" />
          400 Kgs.
        </div>
        <div className="flex items-center gap-1">
          <FaLocationDot className="text-base text-Bluedark" />
          Pune
        </div>
        <div className="flex items-center gap-1">
          <FaPersonMilitaryPointing className="text-base text-Bluedark" /> 6
        </div>
        <div className="flex items-center gap-1">
          <BsSpeedometer className="text-base text-Bluedark" />
          400
        </div>
        <div className="flex items-center gap-1">
          <FaUserNurse className="text-base text-Bluedark" />
          Yes
        </div>
      </div>
    </>
  );
};

const Flightchallenger605 = () => {
  return (
    <>
      <div className="mb-2">
        <Slider
          className="customCarousel"
          arrows={true}
          infinite={true}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
        >
          <img
            src="/images/C90-airtransfer/challenger-605-airambulance-first.jpg"
            className="object-cover object-center sm:h-[20vh] h-[40dvh] w-full rounded-md overflow-hidden"
          />
          <img
            src="/images/C90-airtransfer/challenger-605-airambulance-second.jpg"
            className="object-cover object-center sm:h-[20vh] h-[40dvh] w-full rounded-md overflow-hidden"
          />
          <img
            src="/images/C90-airtransfer/C90-airtransfer-three.jpg"
            className="object-cover object-center sm:h-[20vh] h-[40dvh] w-full rounded-md overflow-hidden"
          />
          <img
            src="/images/C90-airtransfer/C90-airtransfer-four.jpg"
            className="object-cover object-center sm:h-[20vh] h-[40dvh] w-full rounded-md overflow-hidden"
          />
          <img
            src="/images/C90-airtransfer/C90-airtransfer-five.jpg"
            className="object-cover object-center sm:h-[20vh] h-[40dvh] w-full rounded-md overflow-hidden"
          />
        </Slider>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <img
          src="/images/search-detail/VT-VBSext.png"
          className="object-cover object-top h-[80%] w-full rounded-md overflow-hidden"
        />
        <img
          src="/images/search-detail/VT-VBSlopa.png"
          className="object-cover object-top h-[80%] w-full rounded-md overflow-hidden"
        />
        <img
          src="/images/search-detail/VT-VBSint.png"
          className="object-cover object-top h-[80%] w-full rounded-md overflow-hidden"
        />
      </div>
      <div className="bg-gray-200 rounded-md p-3 grid grid-cols-5 text-sm">
        <div className="flex items-center gap-1">
          <MdOutlineAirlineSeatReclineExtra className="text-base text-Bluedark" />
          6
        </div>
        <div className="flex items-center gap-1">
          <GiWeight className="text-base text-Bluedark" />
          400 Kgs.
        </div>
        <div className="flex items-center gap-1">
          <FaLocationDot className="text-base text-Bluedark" />
          Pune
        </div>
        <div className="flex items-center gap-1">
          <FaPersonMilitaryPointing className="text-base text-Bluedark" /> 6
        </div>
        <div className="flex items-center gap-1">
          <BsSpeedometer className="text-base text-Bluedark" />
          400
        </div>
        <div className="flex items-center gap-1">
          <FaUserNurse className="text-base text-Bluedark" />
          Yes
        </div>
      </div>
    </>
  );
};
// const FlightDetails = ({ aircraftData, data }) => {
//   return (
//     <div
//       className="rounded-md p-5 text-[0.9rem]"
//       style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}
//     >
//       <h2 className="text-base font-bold">Flight Details</h2>
//       <div className="mt-2 mb-3 py-3 border-b-2 border-gray-100">
//         <p className="flex justify-between text-[0.85rem]"></p>

//         <div className="flex justify-between items-center w-full mt-3">
//           <span className="font-bold text-base">{data?.from}</span>
//           <div className="relative">
//             <div className="bg-gray-300 h-[2px] sm:w-36 w-72">
//               <IoIosAirplane className="text-primary bg-primary/20 rounded-full p-1 text-2xl absolute left-1/2 top-1/2 -translate-y-1/2" />
//             </div>
//           </div>
//           <span className="font-bold text-base">{data?.to}</span>
//         </div>
//         <p className="flex justify-between">
//           <span className="max-w-40 text-start">{data?.from}</span>
//           <span className="max-w-40 text-end">{data?.to}</span>
//         </p>
//       </div>
//     </div>
//   );
// };

const FlightDetails = ({ aircraftData, data }) => {
  return (
    <div
      className="rounded-md p-5 text-[0.9rem]"
      style={{ boxShadow: '#000 0px 0px 10px 0px' }}
    >
      <h2 className="text-base font-bold">Flight Details</h2>
      <div className="mt-2 mb-3 py-3  border-gray-100">
        {/* <p className="flex justify-between text-[0.85rem]">
          <span>3/30/2024</span>
          <span>3/30/2024</span>
        </p> */}
        {/* <p className="flex justify-between text-[0.85rem]">
          <span>9:50:00 PM</span>
          <span>11:00:00 PM</span>
        </p> */}
        <div className="flex justify-between items-center w-full mt-3">
          <span className="font-bold text-base">{data?.from}</span>
          <div className="relative">
            <div className="bg-gray-300 flex flex-col items-center h-[2px] sm:w-36 w-72">
              <IoIosAirplane className="text-primary bg-primary/20 rounded-full p-1 text-2xl absolute left-1/2 top-1/2 -translate-y-1/2" />
            </div>
          </div>
          <span className="font-bold text-base">{data?.to}</span>
        </div>
        <p className="flex justify-between">
          <span className="max-w-40 text-start">{data?.from}</span>
          <span className="max-w-40 text-end">{data?.to}</span>
        </p>
      </div>
      {/* <div className="my-3 py-3 border-b-2 border-gray-100">
        <p className="flex justify-between text-[0.85rem]">
          <span>3/30/2024</span>
          <span>3/30/2024</span>
        </p>
        <p className="flex justify-between text-[0.85rem]">
          <span>9:50:00 PM</span>
          <span>11:00:00 PM</span>
        </p> */}
      {/* <div className="flex justify-between items-center w-full mt-3">
          <span className="font-bold text-base">Pune</span>
          <div className="relative">
            <div className="bg-gray-300 h-[2px] sm:w-36 w-72">
              <IoIosAirplane className="text-primary bg-primary/20 rounded-full p-1 text-2xl absolute left-1/2 top-1/2 -translate-y-1/2" />
            </div>
          </div>
          <span className="font-bold text-base">Mumbai</span>
        </div> */}
      {/* <p className="flex justify-between">
          <span className="max-w-40 text-start">Lohegaon Airport</span>
          <span className="max-w-40 text-end">
            Chhatrapati Shivaji International Airport
          </span>
        </p>
      </div> */}
      {/* <div className="my-3 py-3 border-b-2 border-gray-100">
        <p className="flex justify-between text-[0.85rem]">
          <span>3/30/2024</span>
          <span>3/30/2024</span>
        </p>
        <p className="flex justify-between text-[0.85rem]">
          <span>9:50:00 PM</span>
          <span>11:00:00 PM</span>
        </p>
        <div className="flex justify-between items-center w-full mt-3">
          <span className="font-bold text-base">Pune</span>
          <div className="relative">
            <div className="bg-gray-300 h-[2px] sm:w-36 w-72">
              <IoIosAirplane className="text-primary bg-primary/20 rounded-full p-1 text-2xl absolute left-1/2 top-1/2 -translate-y-1/2" />
            </div>
          </div>
          <span className="font-bold text-base">Mumbai</span>
        </div>
        <p className="flex justify-between">
          <span className="max-w-40 text-start">Lohegaon Airport</span>
          <span className="max-w-40 text-end">
            Chhatrapati Shivaji International Airport
          </span>
        </p>
      </div> */}
    </div>
  );
};

// const CostDetails = ({
//   selectedCurrency,
//   handleCurrencyChange,
//   totalCost,
//   makePayment,
// }) => {
//   return (
//     <div
//       className="flex flex-col rounded-md p-5 text-[0.9rem]"
//       style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}
//     >
//       <h2 className="text-base font-bold mb-4">Cost Details</h2>
//       <div className="flex flex-col gap-3 text-[0.9rem]">
//         <p className="flex justify-between">
//           <span>Flight Cost </span>
//           <span>
//             {currencySymbols[selectedCurrency]}
//             {totalCost}
//           </span>
//         </p>
//         {/* <p className="flex justify-between">
//           <span>Airport handling charges</span>
//           <span>₹ 1,23,000</span>
//         </p>
//         <p className="flex justify-between">
//           <span>Sub total</span>
//           <span>₹ 11,26,217</span>
//         </p>
//         <p className="flex justify-between">
//           <span>GST (18%)</span>
//           <span>₹ 2,02,719</span>
//         </p> */}
//         <div className="flex justify-between items-center">
//           <span>Estimated cost</span>
//           <div className="font-bold text-base flex items-center">
//             <select
//               id="currencySelector"
//               value={selectedCurrency}
//               onChange={handleCurrencyChange}
//               className="border-solid border-2 border-black rounded-md text-xs"
//             >
//               {Object.keys(currencySymbols)?.map((currency, index) => {
//                 return (
//                   <option value={currency} key={'currency-item' + index}>
//                     {currency}
//                   </option>
//                 );
//               })}
//             </select>

//             <div className="flex flex-row items-end ml-2">
//               {currencySymbols[selectedCurrency]}
//               <div className=" font-extrabold"> {totalCost}</div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <button
//         className="border border-primary rounded-md p-2 text-sm mt-10 hover:bg-primary hover:text-white shadow-lg shadow-primary/70 bg-primary text-white"
//         onClick={() => alert('hii')}
//       >
//         Pay Now
//       </button>
//     </div>
//   );
// };

const CostDetails = ({
  selectedCurrency,
  handleCurrencyChange,
  totalCost,
  makePayment,
}) => {
  return (
    <div
      className={`flex flex-col rounded-md p-5 text-[0.9rem] shadow lg ${styles.Shadow}`}
      style={{ boxShadow: '#000 0px 0px 10px 0px' }}
    >
      <h2 className="text-base font-bold mb-4">Cost Details</h2>
      <div className="flex flex-col gap-3 text-[0.9rem]">
        <div className="flex justify-between">
          <span>Flight Cost </span>
          <span>
            {currencySymbols[selectedCurrency]}
            {totalCost}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span>Estimated cost</span>
          <div className="font-bold text-base flex items-center">
            <select
              id="currencySelector"
              value={selectedCurrency}
              onChange={handleCurrencyChange}
              className="border-solid border-2 border-black rounded-md text-xs"
            >
              {Object.keys(currencySymbols)?.map((currency, index) => {
                return (
                  <option value={currency} key={'currency-item' + index}>
                    {currency}
                  </option>
                );
              })}
            </select>

            <div className="flex flex-row items-end ml-2">
              {currencySymbols[selectedCurrency]}
              <div className=" font-extrabold"> {totalCost}</div>
            </div>
          </div>
        </div>
      </div>
      <button className="border border-[#0FE7E7] text- rounded-md p-2 text-sm mt-10 hover:bg-[#0FE7E7] hover:text-white">
        Pay Now
      </button>
    </div>
  );
};
// const Airtransfer = () => {
//   return (
//     <div className="flex flex-col my-10">
//       <h1 className="text-center font-bold text-[black] text-[25px]">
//         How we do Medical transfer
//       </h1>
//       <div className="rounded-lg shadow-lg bg-white p-6 transition-transform transform hover:-translate-y-1 hover:shadow-xl mb-10">
//         <h1 className="text-[20px] font-semibold">
//           {' '}
//           Step1 :-Assessment and Coordination
//         </h1>
//         <p className="text-[16px] font-medium">
//           The need for an air ambulance transfer is typically assessed by
//           medical professionals at the referring facility or by emergency
//           responders at the scene of an incident. Once the decision is made to
//           transfer the patient by air ambulance, coordination begins between the
//           referring facility, the receiving facility, and the air ambulance
//           service provider.
//         </p>
//       </div>
//       <div className="rounded-lg shadow-lg bg-white p-6 transition-transform transform hover:-translate-y-1 hover:shadow-xl mb-10">
//         <h1 className="text-[20px] font-semibold">
//           {' '}
//           Step 2 :- Dispatch and Arrival of Air Ambulance
//         </h1>
//         <p className="text-[16px] font-medium">
//           Medical staff at the referring facility prepare the patient for
//           transfer, which may include stabilizing their condition, administering
//           necessary medications, and ensuring they are safely packaged for
//           transport.
//         </p>
//       </div>
//       <div className="rounded-lg shadow-lg bg-white p-6 transition-transform transform hover:-translate-y-1 hover:shadow-xl mb-10">
//         <h1 className="text-[20px] font-semibold">
//           {' '}
//           Step 3:- Dispatch and Arrival of Air Ambulance
//         </h1>
//         <p className="text-[16px] font-medium">
//           Once the air ambulance arrives, the patient is carefully transferred
//           from the referring facility to the aircraft. The patient is secured in
//           the aircraft and connected to any necessary medical equipment.
//         </p>
//       </div>
//       <div className="rounded-lg shadow-lg bg-white p-6 transition-transform transform hover:-translate-y-1 hover:shadow-xl mb-10">
//         <h1 className="text-[20px] font-semibold">
//           {' '}
//           Step 3:- Transfer to the Air Ambulance
//         </h1>
//         <p className="text-[16px] font-medium">
//           Once the air ambulance arrives, the patient is carefully transferred
//           from the referring facility to the aircraft. The patient is secured in
//           the aircraft and connected to any necessary medical equipment.
//         </p>
//       </div>
//       <div className="rounded-lg shadow-lg bg-white p-6 transition-transform transform hover:-translate-y-1 hover:shadow-xl mb-10">
//         <h1 className="text-[20px] font-semibold"> Step 4:- In-flight Care</h1>
//         <p className="text-[16px] font-medium">
//           During the flight, the medical crew provides continuous care to the
//           patient, including monitoring vital signs, administering medications,
//           and managing any medical emergencies that may arise.
//         </p>
//       </div>
//       <div className="rounded-lg shadow-lg bg-white p-6 transition-transform transform hover:-translate-y-1 hover:shadow-xl mb-10">
//         <h1 className="text-[20px] font-semibold">
//           {' '}
//           Step 5:- Arrival at the Receiving Facility
//         </h1>
//         <p className="text-[16px] font-medium">
//           Upon arrival at the receiving facility, the patient is safely
//           transferred from the air ambulance to the facility&apos;s medical
//           staff. The receiving facility&apos;s medical staff assumes care of the
//           patient and continues treatment as necessary.
//         </p>
//       </div>{' '}
//       <div className="rounded-lg shadow-lg bg-white p-6 transition-transform transform hover:-translate-y-1 hover:shadow-xl mb-10">
//         <h1 className="text-[20px] font-semibold">
//           {' '}
//           Step 6:- Post-transfer Documentation
//         </h1>
//         <p className="text-[16px] font-medium">
//           After the transfer is complete, the air ambulance service provider and
//           the referring and receiving facilities may exchange medical records
//           and documentation related to the transfer for continuity of care.
//         </p>
//       </div>
//       <div className="rounded-lg shadow-lg bg-white p-6 transition-transform transform hover:-translate-y-1 hover:shadow-xl mb-10">
//         <h1 className="text-[20px] font-semibold"> Step 7:- Follow-up Care</h1>
//         <p className="text-[16px] font-medium">
//           Once the patient has been transferred, follow-up care and treatment
//           are provided as needed based on the patient&apos;s condition and the
//           recommendations of the medical team.
//         </p>
//       </div>
//     </div>
//   );
// };
const Airtransfer = () => {
  return (
    <div
      className={`px-[30px] w-[90%] my-[50px] m-auto py-[50px] bg-white rounded-[8px] shadow-lg ${styles.Shadow}`}
      style={{ boxShadow: '#000 0px 0px 10px 0px' }}
    >
      <div className="flex flex-col px-[50px] mb-10">
        <h1 className="text-center font-bold pb-[30px] text-[black] text-[25px]">
          How we do Medical transfer
        </h1>
        <div className="rounded-lg  bg-[#0FE7E7] p-6 transition-transform transform hover:-translate-y-1 hover:shadow-xl mb-10">
          <h1 className="text-[20px] font-semibold">
            {' '}
            Step1 :-Assessment and Coordination
          </h1>
          <p className="text-[16px] font-medium">
            The need for an air ambulance transfer is typically assessed by
            medical professionals at the referring facility or by emergency
            responders at the scene of an incident. Once the decision is made to
            transfer the patient by air ambulance, coordination begins between
            the referring facility, the receiving facility, and the air
            ambulance service provider.
          </p>
        </div>
        <div className="rounded-lg  bg-[#0FE7E7] p-6 transition-transform transform hover:-translate-y-1 hover:shadow-xl mb-10">
          <h1 className="text-[20px] font-semibold">
            {' '}
            Step 2 :- Dispatch and Arrival of Air Ambulance
          </h1>
          <p className="text-[16px] font-medium">
            Medical staff at the referring facility prepare the patient for
            transfer, which may include stabilizing their condition,
            administering necessary medications, and ensuring they are safely
            packaged for transport.
          </p>
        </div>
        <div className="rounded-lg  bg-[#0FE7E7] p-6 transition-transform transform hover:-translate-y-1 hover:shadow-xl mb-10">
          <h1 className="text-[20px] font-semibold">
            {' '}
            Step 3:- Dispatch and Arrival of Air Ambulance
          </h1>
          <p className="text-[16px] font-medium">
            Once the air ambulance arrives, the patient is carefully transferred
            from the referring facility to the aircraft. The patient is secured
            in the aircraft and connected to any necessary medical equipment.
          </p>
        </div>
        <div className="rounded-lg  bg-[#0FE7E7] p-6 transition-transform transform hover:-translate-y-1 hover:shadow-xl mb-10">
          <h1 className="text-[20px] font-semibold">
            {' '}
            Step 3:- Transfer to the Air Ambulance
          </h1>
          <p className="text-[16px] font-medium">
            Once the air ambulance arrives, the patient is carefully transferred
            from the referring facility to the aircraft. The patient is secured
            in the aircraft and connected to any necessary medical equipment.
          </p>
        </div>
        <div className="rounded-lg  bg-[#0FE7E7] p-6 transition-transform transform hover:-translate-y-1 hover:shadow-xl mb-10">
          <h1 className="text-[20px] font-semibold">
            {' '}
            Step 4:- In-flight Care
          </h1>
          <p className="text-[16px] font-medium">
            During the flight, the medical crew provides continuous care to the
            patient, including monitoring vital signs, administering
            medications, and managing any medical emergencies that may arise.
          </p>
        </div>
        <div className="rounded-lg  bg-[#0FE7E7] p-6 transition-transform transform hover:-translate-y-1 hover:shadow-xl mb-10">
          <h1 className="text-[20px] font-semibold">
            {' '}
            Step 5:- Arrival at the Receiving Facility
          </h1>
          <p className="text-[16px] font-medium">
            Upon arrival at the receiving facility, the patient is safely
            transferred from the air ambulance to the facility&apos;s medical
            staff. The receiving facility&apos;s medical staff assumes care of
            the patient and continues treatment as necessary.
          </p>
        </div>{' '}
        <div className="rounded-lg  bg-[#0FE7E7] p-6 transition-transform transform hover:-translate-y-1 hover:shadow-xl mb-10">
          <h1 className="text-[20px] font-semibold">
            {' '}
            Step 6:- Post-transfer Documentation
          </h1>
          <p className="text-[16px] font-medium">
            After the transfer is complete, the air ambulance service provider
            and the referring and receiving facilities may exchange medical
            records and documentation related to the transfer for continuity of
            care.
          </p>
        </div>
        <div className="rounded-lg  bg-[#0FE7E7] p-6 transition-transform transform hover:-translate-y-1 hover:shadow-xl mb-10">
          <h1 className="text-[20px] font-semibold">
            {' '}
            Step 7:- Follow-up Care
          </h1>
          <p className="text-[16px] font-medium">
            Once the patient has been transferred, follow-up care and treatment
            are provided as needed based on the patient&apos;s condition and the
            recommendations of the medical team.
          </p>
        </div>
      </div>
    </div>
  );
};

const AviapageDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const [aircraftDataLoading, setAircraftDataLoading] = useState(false);
  const [aircraftData, setAircraftData] = useState({});
  const [data, setData] = useState({});
  const [selectedCurrency, setSelectedCurrency] = useState('EUR');
  const [totalCost, setTotalCost] = useState(0);

  const getEUR = (price) => {
    const EuroPrice = price * 0.011;
    return EuroPrice.toFixed(2);
  };
  const getAED = (price) => {
    const PriceAED = price * 0.044;
    return PriceAED.toFixed(2);
  };

  const getUSD = (price) => {
    const PriceUsd = price * 0.012;
    return PriceUsd.toFixed(2);
  };

  const getINR = (price) => {
    const PriceINR = price;
    return PriceINR.toFixed(2);
  };

  useEffect(() => {
    const actualTotalPrice = aircraftData?.totalPriceWithAdminMargin
      ? parseFloat((aircraftData?.totalPriceWithAdminMargin).toFixed(2))
      : 0;
    switch (selectedCurrency) {
      case 'EUR':
        setTotalCost(getEUR(actualTotalPrice));
        break;
      case 'AED':
        setTotalCost(getAED(actualTotalPrice));
        break;
      case 'USD':
        setTotalCost(getUSD(actualTotalPrice));
        break;
      case 'INR':
        setTotalCost(getINR(actualTotalPrice));
        break;
      default:
        setTotalCost(0);
    }
  }, [aircraftData?.totalPriceWithAdminMargin, selectedCurrency]);

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  const fetchData = async () => {
    try {
      setAircraftDataLoading(true);
      const response = await axios(
        `http://localhost:8000/customer/avipage/aircraft/${id}`
      );

      if (response) {
        setAircraftData(response?.data?.specificAircraft);
        setData(response?.data);
        console.log('date', response?.data?.specificAircraft?.operator?.date);
        const segments =
          response.data.specificAircraft?.aircraft?.itineraries[0]?.segments;
        console.log('segment line 632', segments);
        locationData.push({
          departureLocation: segments[0]?.departure?.iataCode,
          departureTime: segments[0]?.departure?.at,
          destinationLocation: segments.at(-1)?.arrival?.iataCode,
          destinationTime: segments.at(-1)?.arrival?.at,
        });

        // if (segments?.length > 1) {

        // } else {
        //   setLocationData({
        //     departureLocation: segments[0]?.departure?.iataCode,
        //     departureTime: segments[0]?.departure?.at,
        //     destinationLocation: segments[0]?.arrival?.iataCode,
        //     destinationTime: segments[0]?.arrival?.at,
        //   });
        // }

        const airlineName =
          aircraftData?.aircraft?.itineraries[0]?.segments[0]?.carrierCode ??
          [];
        const airline = renderAirlineName(airlineName);
        setairlineName(airline);
      } else {
        setError('error');
        setResults([]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const amount = totalCost;
  const currency = selectedCurrency;
  const receiptId = 'quicklftReceipt';
  const makePayment = async (e) => {
    const response = await fetch('http://localhost:8000/rayzorpay/Order', {
      method: 'POST',
      body: JSON.stringify({
        amount: amount,
        currency: currency,
        receipt: receiptId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const order = await response.json();
    console.log('this is line 27', order.order.id);

    let options = {
      key: 'rzp_test_dSGUgBKlIU2Ecm',
      amount: amount,
      currency: currency,
      name: 'Qickly',
      description: 'Test Transaction',
      image: 'https://example.com/your_logo',
      order_id: order.order.id,
      handler: async function (response) {
        const body = {
          ...response,
        };

        const validateRes = await fetch(
          'http://localhost:8000/rayzorpay/Order/verify',
          {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        const jsonRes = await validateRes.json();
        console.log(jsonRes);
      },
      prefill: {
        name: 'Gaurav Kumar',
        email: 'gaurav.kumar@example.com',
        contact: '9000090000',
      },
      notes: {
        address: 'Razorpay Corporate Office',
      },
      theme: {
        color: '#3399cc',
      },
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.on('payment.failed', function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
    rzp1.open();
    e.preventDefault();
  };
  useEffect(() => {
    if (id) {
      fetchData();
      const loadRayzorPaymentScript = async () => {
        await LoadScript('https://checkout.razorpay.com/v1/checkout.js');
      };
      loadRayzorPaymentScript();
    }
  }, [id]);

  return (
    <div className="">
      <DedicatedeHeader />
      <div className="sm:px-20 px-36">
        <p className="text-sm my-3">
          Home Search / List /{' '}
          <span className="font-medium">Search Result</span>
        </p>
        <div className="flex sm:flex-col gap-5 my-3">
          <div className="sm:w-full w-8/12">
            <FlightImages
              aircraftType={aircraftData?.aviapagesResponse?.aircraft}
            />
          </div>
          <div
            className={`sm:w-full w-4/12 border border-gray-300 border-dashed rounded-md p-4 text-[0.9rem]  ${styles.Shadow}`}
          >
            <JourneyDetails
              aircraft={aircraftData || {}}
              selectedCurrency={selectedCurrency}
              handleCurrencyChange={handleCurrencyChange}
              totalCost={totalCost}
              data={data}
            />
          </div>
        </div>
        <div className="flex sm:flex-col gap-5 mt-8 mb-20">
          <div className="sm:w-full w-6/12">
            <FlightDetails aircraftData={aircraftData} data={data} />
          </div>
          <div className="sm:w-full w-6/12">
            <CostDetails
              totalCost={totalCost}
              selectedCurrency={selectedCurrency}
              handleCurrencyChange={handleCurrencyChange}
              makePayment={makePayment}
            />
          </div>
        </div>
        <Airtransfer />
      </div>
    </div>
  );
};
export default AviapageDetails;
