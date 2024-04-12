'use client';

import { FaUserNurse } from 'react-icons/fa6';
import { BsSpeedometer } from 'react-icons/bs';
import { MdOutlineAirlineSeatReclineExtra } from 'react-icons/md';
import { GiWeight } from 'react-icons/gi';
import { FaLocationDot } from 'react-icons/fa6';
import { FaPersonMilitaryPointing } from 'react-icons/fa6';
import { IoIosAirplane } from 'react-icons/io';
import { useRouter } from 'next/router';
import LoadScript from '@/components/Utils/loadScript';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import styles from './search.module.css';
import Aircanada from '../../public/images/airlines/air-canada.jpg';
import Airfrance from '../../public/images/airlines/air-france.jpg';
import Airmauritius from '../../public/images/airlines/air-mauritius.jpg';
import NipponAirline from '../../public/images/airlines/all-nippon-airways.jpg';
import americanAirline from '../../public/images/airlines/american-airlines.jpg';
import BritishAirways from '../../public/images/airlines/british-airways.jpg';
import cathayAirline from '../../public/images/airlines/cathay-pacific.jpg';
import DeltaAirline from '../../public/images/airlines/delta-airlines.jpg';
import Emirates from '../../public/images/airlines/Emirates.jpg';
import Ethiads from '../../public/images/airlines/etihad-airways.jpg';
import Indigo from '../../public/images/airlines/indigo.jpg';
import KLMAirline from '../../public/images/airlines/KLM-Royal-Dutch-Airlines.jpg';
import Lufthansa from '../../public/images/airlines/Lufthansa.jpg';
import malesiyaAirline from '../../public/images/airlines/malaysi-airlines.jpg';
import PhillippinesAirlines from '../../public/images/airlines/philippine-airlines.jpg';
import Quantas from '../../public/images/airlines/Qantas.jpg';
import QatarAirway from '../../public/images/airlines/Qatar-airways.jpg';
import SaudiAirline from '../../public/images/airlines/Saudia.jpg';
import SingaporeAirline from '../../public/images/airlines/singapore-airlines.jpg';
import SouthAfrican from '../../public/images/airlines/south-african-airways.jpg';
import TurkishAirlineNew from '../../public/images/airlines/turkish-airlines.jpg';
import TurkishAirline from '../../public/images/airlines/Turkish.jpg';
import UnitedAirline from '../../public/images/airlines/united-airlines.jpg';
import VirginAtlantic from '../../public/images/airlines/virgin-atlantic-new.jpg';
import VirginAirline from '../../public/images/airlines/virgin-atlantic.jpg';
import AirIndia from '../../public/images/airlines/Air-india.jpg';
import OmanAirline from '../../public/images/airlines/Oman-airline.jpg';
import Layout from '@/components/layout/Layout';
import Image from 'next/image';

const currencySymbols = {
  EUR: '€',
  AED: 'AED',
  USD: '$',
  INR: '₹',
};

const AirlineImages = {
  AC: Aircanada,
  '6E': Indigo,
  AF: Airfrance,
  AI: AirIndia,
  AA: americanAirline,
  BA: BritishAirways,
  CX: cathayAirline,
  DL: DeltaAirline,
  EK: Emirates,
  EY: Ethiads,
  KL: KLMAirline,
  LH: Lufthansa,
  QF: Quantas,
  QR: QatarAirway,
  SQ: SingaporeAirline,
  TK: TurkishAirline,
  UA: UnitedAirline,
  VS: VirginAtlantic,
  THY: TurkishAirlineNew,
  WY: OmanAirline,
  OMA: OmanAirline,
  SAA: SouthAfrican,
  ANA: NipponAirline,
  PAL: PhillippinesAirlines,
  VIR: VirginAirline,
  MAU: Airmauritius,
  MH: malesiyaAirline,
  SV: SaudiAirline,
};

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

const JourneyDetails = ({
  totalTravelDuration,
  selectedCurrency,
  handleCurrencyChange,
  locationData,
  aircraft,
  totalCost,
  price,
}) => {
  return (
    <>
      <h3 className="font-bold">
        {locationData?.departureLocation} {locationData?.destinationLocation}
      </h3>
      <p className="font-bold text-[0.85rem]">
        Total Travel:-{' '}
        {totalTravelDuration?.length > 0 &&
          totalTravelDuration.map((data) => {
            return `${Math.floor(data.totalHours)}h ${Math.floor(
              data.totalMinutes
            )}m`;
          })}
      </p>
      <p className="my-3">
        1 Passengers |{' '}
        {aircraft?.lastTicketingDate &&
          moment(aircraft?.lastTicketingDate)?.format('DD MMM, YYYY')}
      </p>
      <div className="border-b border-t my-2">
        <div className="flex items-center justify-between py-3">
          <span>Flying Cost</span>
          <span>
            {currencySymbols[selectedCurrency]}
            {totalCost}
          </span>
        </div>
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
        <span className="font-bold">Qwiklif</span>, Air Ambulance Service Which
        provide affordable air ambulance services to Patience .
      </div>
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
        <button className="bg-primary rounded-md font-semibold p-2 text-sm mt-2">
          Enquire Now
        </button>
      </div>
    </>
  );
};

const FlightImages = ({ locationData }) => {
  return (
    <>
      <div className="mb-2">
        <Slider
          className="customCarousel"
          arrows={true}
          // dots={true}
          infinite={true}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
        >
          <img
            src="/images/search-detail/VT-VBSext.png"
            className="object-cover object-center sm:h-[20vh] h-[40dvh] w-full rounded-md overflow-hidden"
          />
          <img
            src="/images/search-detail/VT-VBSlopa.png"
            className="object-cover object-center sm:h-[20vh] h-[40dvh] w-full rounded-md overflow-hidden"
          />
          <img
            src="/images/search-detail/VT-VBSint.png"
            className="object-cover object-center sm:h-[20vh] h-[40dvh] w-full rounded-md overflow-hidden"
          />
        </Slider>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <Image
          src="/images/search-detail/VT-VBSext.png"
          className="object-cover object-top h-[80%] w-full rounded-md overflow-hidden"
        />
        <Image
          src="/images/search-detail/VT-VBSlopa.png"
          className="object-cover object-top h-[80%] w-full rounded-md overflow-hidden"
        />
        <Image
          src="/images/search-detail/VT-VBSint.png"
          className="object-cover object-top h-[80%] w-full rounded-md overflow-hidden"
        />
      </div>
      <div className="bg-gray-200 rounded-md p-3 grid grid-cols-5 text-sm">
        <div className="flex items-center gap-1">
          <MdOutlineAirlineSeatReclineExtra className="text-base text-Bluedark" />
          1
        </div>
        <div className="flex items-center gap-1">
          <GiWeight className="text-base text-Bluedark" />
          400 Kgs.
        </div>
        <div className="flex items-center gap-1">
          <FaLocationDot className="text-base text-Bluedark" />
          {locationData?.departureLocation} -{' '}
          {locationData?.destinationLocation}
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

const FlightDetails = ({ segments, data, totalTravelDuration }) => {
  return (
    <div>
      <div
        className="rounded-md p-5 text-[0.9rem]"
        style={{ boxShadow: '#000 0px 0px 10px 0px' }}
      >
        <h2 className="text-base font-bold">Flight Details</h2>
        {segments?.map((segment) => {
          return (
            <div
              key={'segment-' + segment?.number}
              className="mt-2 mb-3 py-3 border-b-2 border-gray-100"
            >
              <p className="flex justify-between text-[0.85rem]">
                <span>
                  {segment?.departure?.at
                    ? moment(segment?.arrival?.at)?.format('DD/MM/YYYY')
                    : '-/-/-'}
                </span>
                <span>
                  {segment?.arrival?.at
                    ? moment(segment?.departure?.at)?.format('DD/MM/YYYY')
                    : '-/-/-'}
                </span>
              </p>

              <p className="flex justify-between text-[0.85rem]">
                <span>
                  {segment?.departure?.at
                    ? moment(segment?.arrival?.at)?.format('HH:mm')
                    : '-:-'}
                </span>
                <span>
                  {segment?.arrival?.at
                    ? moment(segment?.departure?.at)?.format('HH:mm')
                    : '-:-'}
                </span>
              </p>

              <div className="flex justify-between items-center w-full mt-3">
                <span className="font-bold text-base">
                  {' '}
                  {segment?.departure?.iataCode}
                </span>
                <div className="relative">
                  <div className="bg-gray-300 h-[2px]  sm:w-36 w-72">
                    <IoIosAirplane className="text-primary bg-primary/20 rounded-full p-1 text-2xl absolute left-1/2 top-1/2 -translate-y-1/2" />
                  </div>
                </div>
                <span className="font-bold text-base">
                  {segment?.arrival?.iataCode}
                </span>
              </div>

              <p className="flex justify-between">
                <span className="max-w-40 text-start">
                  {' '}
                  {segment?.departure?.iataCode}
                </span>
                <span className="max-w-40 text-end">
                  {segment?.arrival?.iataCode}
                </span>
              </p>
            </div>
          );
        })}
        <div className="flex justify-between align-middle mb-5">
          <div className="flex flex-col">
            <p className="font-semibold">
              Medical Equiment and Dedicated Medical Team:
            </p>
            <ul className="list-disc ml-4 flex flex-col gap-1">
              <li className="font-semibold text-slate-600 text-xs">
                Stretcher ✅
              </li>
              <li className="font-semibold text-slate-600 text-xs">
                Doctor OnBoard ✅
              </li>
              <li className="font-semibold text-slate-600 text-xs">
                Medical Equipment✅
              </li>
              <li className="font-semibold text-slate-600 text-xs">
                Oxygen(4L/Min) ✅
              </li>
              <li className="font-semibold text-slate-600 text-xs">
                We are Providing additional equiment based on patience
                condition✅
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const CostDetails = ({
  price,
  selectedCurrency,
  handleCurrencyChange,
  totalCost,
}) => {
  const amount = 500;
  const currency = 'INR';
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
    const loadRayzorPaymentScript = async () => {
      await LoadScript('https://checkout.razorpay.com/v1/checkout.js');
    };
    loadRayzorPaymentScript();
  }, []);
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

      <button
        className="border border-[#11b6e3] text- rounded-md p-2 text-sm mt-10 hover:bg-[#11b6e3] hover:text-white mb-3 font-semibold"
        onClick={makePayment}
      >
        Pay Now
      </button>
      <div className="font-semibold text-[12px] text-[#11b6e3]">
        * Reserve Seat by paying 20% amount of Total Price{' '}
      </div>
    </div>
  );
};
const Airtransfer = () => {
  return (
    <div
      className={`px-[18px] sm:px-[10px] w-[100%] my-[50px] sm:my-[25px] m-auto py-[50px] bg-white rounded-[8px] shadow-lg ${styles.Shadow}`}
      style={{ boxShadow: '#000 0px 0px 10px 0px' }}
    >
      <div className="flex flex-col px-[50px] sm:px-[13px] mb-10">
        <h1 className="text-center font-bold pb-[30px] text-[black] text-[25px]">
          How we do Medical transfer
        </h1>
        <div className="rounded-lg  bg-[#11b6e3] p-6 transition-transform transform hover:-translate-y-1 hover:shadow-xl mb-10">
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
        <div className="rounded-lg  bg-[#11b6e3] p-6 transition-transform transform hover:-translate-y-1 hover:shadow-xl mb-10">
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
        <div className="rounded-lg  bg-[#11b6e3] p-6 transition-transform transform hover:-translate-y-1 hover:shadow-xl mb-10">
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
        <div className="rounded-lg  bg-[#11b6e3] p-6 transition-transform transform hover:-translate-y-1 hover:shadow-xl mb-10">
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
        <div className="rounded-lg  bg-[#11b6e3] p-6 transition-transform transform hover:-translate-y-1 hover:shadow-xl mb-10">
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
        <div className="rounded-lg  bg-[#11b6e3] p-6 transition-transform transform hover:-translate-y-1 hover:shadow-xl mb-10">
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
        <div className="rounded-lg  bg-[#11b6e3] p-6 transition-transform transform hover:-translate-y-1 hover:shadow-xl mb-10">
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
        <div className="rounded-lg  bg-[#11b6e3] p-6 transition-transform transform hover:-translate-y-1 hover:shadow-xl mb-10">
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
      <div className="flex justify-center">
        <button className="bg-primary rounded-md  p-2 text-sm mt-2  w-[100px] font-semibold">
          Pay Now
        </button>
      </div>
    </div>
  );
};

const WhyWithqwiklif = () => {
  return (
    <div
      className={`px-[18px] sm:px-[10px] w-[100%] my-[50px] sm:my-[25px] m-auto py-[50px] bg-white rounded-[8px] shadow-lg ${styles.Shadow}`}
      style={{ boxShadow: '#000 0px 0px 10px 0px' }}
    >
      <div className="flex flex-col px-[50px] sm:px-[13px] mb-10">
        <h1 className="text-center font-bold pb-[30px] text-[black] text-[25px]">
          why to choose qwiklif
        </h1>
        <div className="rounded-lg  bg-[#11b6e3] p-6 transition-transform transform hover:-translate-y-1 hover:shadow-xl mb-10">
          <h1 className="text-[20px] font-semibold">
            {' '}
            1. Instant quotation and Instant Support
          </h1>
          <p className="text-[16px] font-medium">
            Qwiklif is World First Air Ambulance company providing Instant
            quotation for medical air transfer .
          </p>
        </div>
        <div className="rounded-lg  bg-[#11b6e3] p-6 transition-transform transform hover:-translate-y-1 hover:shadow-xl mb-10">
          <h1 className="text-[20px] font-semibold">
            {' '}
            2. well qualified Flying Doctor's and Paramedics Team's
          </h1>
          <p className="text-[16px] font-medium">
            Qwiklif Have well qualified flying doctor's with 30+year experience
            .qwiklif have well qualified paramedics team.
          </p>
        </div>
        <div className="rounded-lg  bg-[#11b6e3] p-6 transition-transform transform hover:-translate-y-1 hover:shadow-xl mb-10">
          <h1 className="text-[20px] font-semibold">3. 24/7 Availability</h1>
          <p className="text-[16px] font-medium">
            Medical emergencies can occur at any time, which is why we operate
            round-the-clock to provide timely assistance whenever you need it.
            Whether it's a critical situation or a planned transfer, we are
            ready to assist you anytime, anywhere.
          </p>
        </div>
        <div className="rounded-lg  bg-[#11b6e3] p-6 transition-transform transform hover:-translate-y-1 hover:shadow-xl mb-10">
          <h1 className="text-[20px] font-semibold">4. Global Reach</h1>
          <p className="text-[16px] font-medium">
            Our air transfer services are not confined to a specific region. We
            have the capability to operate both domestically and
            internationally, ensuring that you can reach your desired
            destination swiftly and safely, no matter where you are.
          </p>
        </div>
        <div className="rounded-lg  bg-[#11b6e3] p-6 transition-transform transform hover:-translate-y-1 hover:shadow-xl mb-10">
          <h1 className="text-[20px] font-semibold">
            {' '}
            5. Compassionate Customer Service
          </h1>
          <p className="text-[16px] font-medium">
            We understand that dealing with medical emergencies can be
            stressful. That's why our dedicated customer service team is always
            available to address your concerns and provide assistance every step
            of the way. Your comfort and peace of mind are our top priorities.
          </p>
        </div>
        <div className="rounded-lg  bg-[#11b6e3] p-6 transition-transform transform hover:-translate-y-1 hover:shadow-xl mb-10">
          <h1 className="text-[20px] font-semibold"> 6.Customized Solutions</h1>
          <p className="text-[16px] font-medium">
            We recognize that every patient is unique, and their medical needs
            may vary. That's why we offer customized air transfer solutions
            tailored to meet individual requirements. Whether it's specialized
            medical equipment or specific accommodations, we strive to
            accommodate your needs to the best of our abilities.
          </p>
        </div>{' '}
        <div className="rounded-lg  bg-[#11b6e3] p-6 transition-transform transform hover:-translate-y-1 hover:shadow-xl mb-10">
          <h1 className="text-[20px] font-semibold">7. Transparent Pricing:</h1>
          <p className="text-[16px] font-medium">
            We believe in transparency when it comes to pricing. You can trust
            us to provide clear and upfront cost estimates without any hidden
            fees or surprises. We understand the financial burden that medical
            emergencies can impose, and we are committed to providing
            cost-effective solutions.
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="bg-primary rounded-md font-medium p-2 text-sm mt-2  w-[100px]">
          Pay Now
        </button>
      </div>
    </div>
  );
};

const AmadeuspageDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [results, setResults] = useState([]);
  const [Error, setError] = useState('');
  const [locationData, setLocationData] = useState({});
  const [totalTravelDuration, setTotalTravelDuration] = useState('');
  const [techStops, setTechStops] = useState([]);
  const [availableticket, setavailableticket] = useState('');
  const [airlineName, setairlineName] = useState('');
  const [aircraftDataLoading, setAircraftDataLoading] = useState(false);
  const [Aircraftdata, setAircraftData] = useState([]);
  // let locationData = {};
  const [airlineImage, setAirlineImage] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState('EUR');
  const [totalCost, setTotalCost] = useState(0);
  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  console.log('results', results);
  console.log('locationData', locationData);

  const airlineNames = {
    AC: 'Air Canada',
    '6E': 'IndiGo',
    AF: 'Air France',
    AI: 'Air India',
    AA: 'American Airlines',
    BA: 'British Airways',
    CX: 'Cathay Pacific',
    DL: 'Delta Air Lines',
    EK: 'Emirates',
    EY: 'Etihad Airways',
    KL: 'KLM Royal Dutch Airlines',
    LH: 'Lufthansa',
    QF: 'Qantas',
    QR: 'Qatar Airways',
    SQ: 'Singapore Airlines',
    TK: 'Turkish Airlines',
    UA: 'United Airlines',
    VS: 'Virgin Atlantic',
    THY: 'Turkish Airlines',
    WY: 'Oman Air',
    OMA: 'Oman Air',
    SAA: 'South African Airways',
    ANA: 'All Nippon Airways',
    PAL: 'Philippine Airlines',
    VIR: 'Virgin Atlantic',
    MAU: 'Air Mauritius',
    MH: 'Malaysia Airlines',
    SV: 'Saudia',
  };

  const AllAircraftid = () => {
    const id = results?.aircraft?.id;
    console.log('id line 166', id);
    setAircraftid(id);
  };
  const getLocationData = () => {
    const segments = results?.aircraft?.itineraries[0]?.segments ?? [];
    if (segments?.length > 1) {
      // setLocationData({
      //   departureLocation: segments[0]?.departure?.iataCode,
      //   departureTime: segments[0]?.departure?.at,
      //   destinationLocation: segments.at(-1)?.arrival?.iataCode,
      //   destinationTime: segments.at(-1)?.arrival?.at,
      // });
    } else {
      // setLocationData({
      //   departureLocation: segments[0]?.departure?.iataCode,
      //   departureTime: segments[0]?.departure?.at,
      //   destinationLocation: segments[0]?.arrival?.iataCode,
      //   destinationTime: segments[0]?.arrival?.at,
      // });
    }
  };
  const parseISO8601Duration = (durationString) => {
    let TimeDuration = [];
    const regex =
      /P(?:([0-9]+)Y)?(?:([0-9]+)M)?(?:([0-9]+)D)?(?:T(?:([0-9]+)H)?(?:([0-9]+)M)?(?:([0-9]+)S)?)?/;

    const matches = (durationString || '')?.match(regex);
    // const matches = true;
    if (!matches) {
      throw new Error('Invalid ISO8601 duration format');
    }

    const [, years, months, days, hours, minutes, seconds] =
      matches.map(Number);

    const totalSeconds = seconds || 0;
    const totalMinutes = totalSeconds / 60 + (minutes || 0);
    const totalHours = totalMinutes / 60 + (hours || 0);
    const totalDays = totalHours / 24 + (days || 0);

    TimeDuration.push({
      years: years || 0,
      months: months || 0,
      days: days || 0,
      hours: hours || 0,
      minutes: minutes || 0,
      seconds: seconds || 0,
      totalDays,
      totalHours,
      totalMinutes,
      totalSeconds,
    });
    console.log('TimeDuration line 196', TimeDuration);
    return TimeDuration;
  };

  const AllsingleId = () => {
    const id = results?.aircraft?.id;

    setAircraftid(id);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    console.log('date month and year', `${date.getDate()} ${month} ${year}`);
    return `${date.getDate()} ${month} ${year}`;
  };
  const TicketAvailable = () => {
    const ticketDate = [];
    console.log(' ticketDate line 125', ticketDate);
    setavailableticket(formatDate(ticketDate));
  };

  const renderAirlineName = (carrierCode) => {
    return airlineNames[carrierCode] || 'Unknow Airline';
  };

  const AirlineImage = () => {
    const airlineName =
      results?.aircraft?.itineraries[0]?.segments[0]?.carrierCode ?? [];
    const airlineImage = AirlineImages[airlineName];
    setAirlineImage(airlineImage);
  };
  const AirlineName = () => {
    const airlineName =
      results?.aircraft?.itineraries[0]?.segments[0]?.carrierCode ?? [];
    console.log(' airlineName  line 125', airlineName);
    const airline = renderAirlineName(airlineName);
    setairlineName(airline);
  };

  const getTravelDuration = () => {
    const timeduration = results?.aircraft?.itineraries[0]?.duration ?? [];

    let flyingTime = parseISO8601Duration(timeduration);
    console.log('flyingTime  line 209', flyingTime);
    setTotalTravelDuration(flyingTime);
  };

  const getTechStops = () => {
    const stops = [];
    const segments = results?.aircraft?.itineraries[0]?.segments ?? [];
    if (segments?.length > 1) {
      segments?.forEach((item, index) => {
        if (index !== segments?.length - 1) {
          stops.push(item?.arrival?.iataCode);
        }
      });
    }
    setTechStops(stops);
  };

  const formatTime = (date) => {
    return new Date(
      (typeof date === 'string' ? new Date(date) : date).toLocaleString(
        'en-US',
        { timeZone: currentTimeZone }
      )
    );
  };

  const fetchData = async () => {
    try {
      console.log('id line 450', id);
      setAircraftDataLoading(true);
      const response = await axios.get(
        `http://localhost:8000/customer/amadeus/aircraft/${id}`
      );

      if (response) {
        setResults(response.data.specificAircraft);
        console.log('data line 752', response.data.specificAircraft);
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
        console.log('airlineName  line 125', airlineName);
        const airline = renderAirlineName(airlineName);
        setairlineName(airline);
        setAircraftDataLoading(false);
        console.log('results line 460', results);
        setResults([]);
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

  useEffect(() => {
    if (id) {
      fetchData();
      const loadRayzorPaymentScript = async () => {
        await LoadScript('https://checkout.razorpay.com/v1/checkout.js');
      };
      loadRayzorPaymentScript();
    }
  }, [id]);

  useEffect(() => {
    if (results?.aircraft) {
      getLocationData();
      // getTravelDuration();
      getTechStops();
      getTravelDuration();
      // TicketAvailable();
      // AirlineImage();
      // AirlineName();
      setTotalCost(
        results?.price?.totalPrice
          ? parseFloat((results?.price?.totalPrice).toFixed(2))
          : 0
      );
    }
  }, [results]);

  const getEUR = (price) => {
    const EuroPrice = price;
    return EuroPrice;
  };
  const getAED = (price) => {
    const PriceAED = price * 3.95;
    return PriceAED.toFixed(2);
  };

  const getUSD = (price) => {
    const PriceUsd = price * 1.077;
    return PriceUsd.toFixed(2);
  };

  const getINR = (price) => {
    const PriceINR = price * 89.42;
    return PriceINR.toFixed(2);
  };

  useEffect(() => {
    const actualTotalPrice = results?.price?.totalPrice
      ? parseFloat((results?.price?.totalPrice).toFixed(2))
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
  }, [results?.price?.totalPrice, selectedCurrency]);

  return (
    <div className="">
      <DedicatedeHeader />
      <div className="px-36 sm:px-8">
        <p className="text-sm my-3">
        
        </p>
        <div className="flex sm:flex-col gap-5 my-3">
          <div className="sm:w-full w-8/12">
            <FlightImages locationData={locationData} />
          </div>
          <div
            className={`sm:w-full w-4/12 border border-gray-300 shadow-lg rounded-[8px] p-4 text-[0.9rem] ${styles.Shadow}`}
          >
            <JourneyDetails
              totalTravelDuration={totalTravelDuration}
              locationData={locationData}
              aircraft={results?.aircraft || {}}
              price={results?.price || {}}
              selectedCurrency={selectedCurrency}
              handleCurrencyChange={handleCurrencyChange}
              totalCost={totalCost}
            />
          </div>
        </div>
        <div className="flex sm:flex-col gap-5 mt-8 mb-8">
          <div className="sm:w-full w-6/12">
            <FlightDetails
              segments={results?.aircraft?.itineraries?.[0]?.segments || []}
              totalTravelDuration={totalTravelDuration}
            />
          </div>
          <div className="sm:w-full w-6/12">
            <CostDetails
              price={results?.price || {}}
              selectedCurrency={selectedCurrency}
              handleCurrencyChange={handleCurrencyChange}
              totalCost={totalCost}
              makePayment={makePayment}
            />
          </div>
        </div>
        <WhyWithqwiklif />
        <Airtransfer />
      </div>
    </div>
  );
};
export default AmadeuspageDetails;
